$(document).ready(function(){
  var flavors = ["vanilla","chocalate", "strawberry", "Butterscotch"];
    flavors.forEach(function(flavor){
    $(".icecream-flavors").append("<li>"+ flavor +"</li>");

});
    var scoopArray = flavors.slice(1,3);
  $(".best-flavor").append("<li>"+ flavor + "</li>");



});

  //



  //   var userInput = $("input#" + flavor).val();
  //   answerArr.push(userInput);
  //
  //
  //   $("." + blank).text(userInput);
  // });
  //
  // newArray.push(answerArr[1]);
  // newArray.push(answerArr[2]);
  // newArray.push(answerArr[3]);
  // $("#answer-div").show();
  //
  // var sites=["color-bullet", "food-bullet", "pet-bullet"]
  // var number = 0;
  //
  // sites.forEach(function(site){
  //   $('.' + site).text(newArray[number]);
  //   number++;
