moveSidebar();

$("#buttonToggle").click(event => {
    event.preventDefault();

    moveNavbar();
});




//Efeito Gaveta no sidebar.
function moveSidebar(){
    $('.link-menu').click(event =>{
        event.preventDefault();

        $('.wrapper').toggleClass('moveSide');
        //$('.sidebar').toggleClass('table-structures');

    });
}

function moveNavbar(){
    $(".table").toggleClass("table-position");
}






