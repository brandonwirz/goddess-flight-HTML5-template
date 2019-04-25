// jQuery script
$("#top-menu ul li a, #nav-menu ul li a").click(function(e){
    e.preventDefault();
    console.log("working>>>")
    $(".toggle").hide();
    var showContent = $(this).attr('href');
    $(showContent).show();
});
