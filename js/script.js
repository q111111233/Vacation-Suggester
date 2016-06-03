$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var name = $("#name").val();
    var continent = $("#continent").val();
    var like = $("#like").val();
    var who = $("#who").val();
    var long = $("#long").val();
    var enviroment = $("#enviroment").val();
    var place = mostChosen(continent, like, who, long, enviroment);

    if(name===""){
      $(".name").text("Please enter your name");
    }
    else{
      $(".name").text(name);
      if(continent===null || like===null || who===null || long===null || enviroment===null){
        $(".place").text("Please choose your preference");
      }
      else{
        $(".place").text(place);
      }
    }

    $("#result").fadeIn(3000);
    $("#result").fadeOut(3000);
    event.preventDefault();
  });
});

// a funtion to find the most frequently selected option
var mostChosen = function(continent, like, who, long, enviroment){
  var store = [continent, like, who, long, enviroment];
  var frequency = {};
  var max = 0;
  var result = 0;
  for(var v in store) {
    frequency[store[v]]=(frequency[store[v]] || 0)+1;
    if(frequency[store[v]] > max) {
      max = frequency[store[v]];
      result = store[v];
    }
  }
  if(result === "a"){
    return "you chose mostly a's, you should get ready to climb on Mount Everest!";
  }
  else if(result === "b"){
    return "you chose mostly b's, you should experience ancient culture in Egypt!";
  }
  else if(result === "c"){
    return "you chose mostly c's, you should enjoy beach and sunshine in Rome!";
  }
  else if(result === "d"){
    return "you chose mostly d's, you should stay in bed and have a nice dream!";
  }
}
