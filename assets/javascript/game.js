$(document).ready(function() {


var targetNumber = Math.floor(Math.random() *51+19 );

  $("#number-to-guess").text(targetNumber);

  var num1= Math.floor(Math.random()*11+4)
  var num2= Math.floor(Math.random()*11+4)
  var num3= Math.floor(Math.random()*11+4)
  var num4= Math.floor(Math.random()*11+4)

  var userTotal= 0; 
  var wins= 0;
  var losses = 0;

$('#numberWins').text(wins);
$('#numberLosses').text(losses);

function reset(){
    targetNumber = Math.floor(Math.random()*51+19);
      console.log(targetNumber)
      $("#number-to-guess").text(targetNumber);
      num1= Math.floor(Math.random()*11+4);
      num2= Math.floor(Math.random()*11+4);
      num3= Math.floor(Math.random()*11+4);
      num4= Math.floor(Math.random()*11+4);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
     } 

function yay(){
alert("Winner!"); wins++; 
$("#numberWins").text(wins);
        reset();
}
        

function loser(){
alert ("Loser!");losses++;
$("#numberLosses").text(losses);
        reset();
}
            

$('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
                      //sets win/lose conditions
        if (userTotal == targetNumber){
                      yay();
                    }
        else if ( userTotal > targetNumber){
                      loser();
                    }   
              }) 
$('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == targetNumber){
                      yay();
                    }
        else if ( userTotal >targetNumber){
                      loser();
                    } 
              })  
$('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
            //sets win/lose conditions
         if (userTotal ==targetNumber){
                      yay();
                    }
        else if ( userTotal > targetNumber){
                      loser();
                    } 
              })  
$('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
                  
        if (userTotal == targetNumber){
                      yay();
                    }
        else if ( userTotal >targetNumber){
                      loser();
                    }
              });   
            }); 
             

;
