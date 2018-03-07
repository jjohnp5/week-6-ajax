
$(document).ready(()=>{
    const API_KEY = "XdGBrwP4R5Z83xSbFkfOdK9AautR3j4P";
    const baseURL  = "https://api.giphy.com/v1/gifs/search?";
    const limit = "25";
    const offset = "0";
    const lang = "en";
    let buttons = ["dog","cat","mouse","horse","droid", "java", "javascript", "html", "css", "php", "sql", "python"];
    var results = {"y": [], "g": [], "pg": [], "pg-13": [], "r": []}
    const ratings = {"y": "Young", "g": "General", "pg": "PG", "pg-13": "PG - 13", "r": "R" }
    $(document).on('click', '.searches', clickHandler);
    $(document).on('click', '.pages', displayImagesHandler);
    $(document).on('click', '.gifs', animateToggle);
    renderButtons();

    $('#submit').on('click', (e)=>{
        e.preventDefault();
        buttons.push($('#search').val());
        renderButtons();
    })
    function renderButtons(){
        $('.buttons').empty();
        buttons.forEach(button => {
            $('.buttons').append($('<button data-name='+button+'>').text(button).addClass("btn btn-success btn-sm searches"));
        $('#search').val("");
        })
        
    }


    function clickHandler(e){
        $('.searches').removeClass("darkGreen");
        results = {"y": [], "g": [], "pg": [], "pg-13": [], "r": []}
        $('.rates').empty();
        $('.images').empty();
        const self = this;
        e.preventDefault();
        $(self).addClass("darkGreen");
            const reqURL = `${baseURL}api_key=${API_KEY}&limit=${limit}&offset=${offset}&lang=${lang}&q=${$(self).data('name')}`;
            $.ajax({url: reqURL, method: 'GET'})
                .done(data =>{
                    console.log(data.data);
                    Object.keys(results).forEach(key => {
                        data.data.forEach(d => {
                            if(d.rating === key){
                                results[key].push(d);
                            }                            
                        })
                        console.log(results[key]);
                        $('.rates').append($('<button data-id="'+key+'">').text(ratings[key]).addClass("btn btn-primary pages"));
                    });
                    
                    console.log(results);
                })
                $('.rates').prepend($('<h4>').text("MPAA Rating:"))

        
    }
    function displayImagesHandler(){
        $('.images').empty();
        $('.pages').removeClass('dark-blue');
        $(this).addClass('dark-blue');
        if(results[$(this).data("id")].length === 0){
            $('.images').append($('<h4>').text("There seems to be nothing here..."));

        }
        results[$(this).data("id")].forEach((img) => {
        
                $('.images').append($('<img class="img-responsive gifs">').attr("src", img.images.downsized_still.url).data({still: img.images.downsized_still.url, animate: img.images.downsized.url}));
        
        })
    }

    function animateToggle(){
        if($(this).attr("src") != $(this).data("still")){
            $(this).attr("src", $(this).data("still"));
        }else{
            $(this).attr("src", $(this).data("animate"));
        }
    }


})