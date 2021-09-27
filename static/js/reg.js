$("button.teacher, button.student").on("click", function(){
    let id = $(this).attr("class");
    $(".current").toggleClass("left").toggleClass("current");
    $("#" + id).toggleClass("right").toggleClass("current")
})

$("button.continue").on("click", function(){
    $(".current").toggleClass("left").toggleClass("continue");
    $("section#choice.right").toggleClass("right").toggleClass("continue");
})