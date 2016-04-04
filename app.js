$(function(){
//var random={};
function run(){
$.ajax('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC').done(function(response){
    //  console.log(response);
    var picture=response;
    lograndom(picture);
  })
}
function lograndom(pic){
  console.log(pic);
$(".display").append("<img src=" + pic.data.image_original_url + ">");
// $(".display").append("<p>" + pic.data.status + "</p>");//tester
 }
 $(".button").on("click", function() {
   $(".display").empty();
   run();//empty is a jquery method!
 console.log("it works!");
})  //click
})  //doc-ready
