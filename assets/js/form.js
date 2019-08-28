$("#buttonToggle").click(event =>{
    event.preventDefault();
    moveFormulario();
});

function moveFormulario(){
    $(".wrapperForm").toggleClass("moveForm");
}