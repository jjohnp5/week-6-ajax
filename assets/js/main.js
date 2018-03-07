
$(document).ready(()=>{
    const API_Key = "XdGBrwP4R5Z83xSbFkfOdK9AautR3j4P"
    const baseURL = "https://api.giphy.com/v1/gifs/search?api_key="+API_Key+"&";

    $(document).on('click', '.searches', clickHandler);

    $('#submit').on('click', (e)=>{
        e.preventDefault();
        const val = $("#search").val();
        $('.buttons').append($(`<button data-name="${val}">`).text(val).addClass("btn btn-success btn-sm searches"));
    })



    function clickHandler(e){
        e.preventDefault();
        const ratings = ["Y", "G", "PG", "PG-13", "R"];
        const queryURL = 
    }


})