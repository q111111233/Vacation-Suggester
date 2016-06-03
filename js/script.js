$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var name = $("#name").val();
    var continent = $("#continent").val();
    var like = $("#like").val();
    var who = $("#who").val();
    var long = $("#long").val();
    var enviroment = $("#enviroment").val();
    var place;

    if(continent === "Asia" && like === "Adventure" && who === "Travel Group" && long === "Over three weeks" && enviroment === "Polar"){
      place = "Mount Everest";
    }
    else if(enviroment === "Outter space"){
      place = "Mars";
    }
    else if(long === "A few hours"){
      place = "Dream";
    }
    else {
      place = "Home";
    }

    $(".place").text(name + " " + place);
    $("#result").fadeIn(3000);
    event.preventDefault();
  });
});
