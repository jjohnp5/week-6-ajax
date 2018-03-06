
$(document).ready(()=>{
    $(document).on('click', '.button', clickHandler);

    $('#submit').on('click', (e)=>{
        e.preventDefault();
        $('.buttons').append($('<button>').data("id", $("#search").val()).text($("#search").val()).addClass("btn btn-success btn-sm searches"));
    })



    function clickHandler(e){
        e.preventDefault();
        alert('hander working');
    }


})