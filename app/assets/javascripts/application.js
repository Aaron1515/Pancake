// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

$( document ).ready(function() {
  console.log( "ready!" );
  roundCounter();
  addPlayerBinding()
});

function roundCounter(){
 upRound();
 downRound();
 resetScore();
}

function addPlayerBinding(){
  addPlayer();
}
// ===================Bidding stop===================





//===================Round Counter Start===================
var counter = 0;
// Go up in round when clicked on add button.
function upRound(){
  $('img#add-round.score-btn').click(function(){
    counter++;
    $('#round-num').text(counter);
  });
}

// Go down in round when clicking on minus button.
function downRound(){
  $('img#minus-round.score-btn').click(function(){
    counter--;
    $('#round-num').text(counter);
  });
}
// ===================Round Counter End===================




// ===================Add New Player===================
function addPlayer(){
 $('a.btn.btn-success').click(function(e){
   var playerName = $('#player-name')[0].value;
   addNewPlayer(playerName);
 });

 $('.playerScore')
}

function addNewPlayer(playerName){
  if (playerName === ""){
    playerName = "Player"
  }

  var player = "<tr class='player-stat'><td>"+playerName+"</th><td class='playerScore'>0</td><td class='btn-sm btn-success plus1'>+1</td><td class='btn-sm btn-success plus5'>+5</td><td class='btn-sm btn-success plus10'>+10</td><td class='btn-sm btn-danger minus10'>-10</td><td class='btn-sm btn-danger minus1'>-1</td></tr>";

  $('table').append(player);

  var newestPlayer = $('.player-stat').last()
  addFunctionTo(newestPlayer);
}

function addFunctionTo(player){
 addOne(player);
 addFive(player);
 addTen(player);
 minusOne(player);
 minusTen(player);
}

// ===================Add New Player End===================





// ===================Reset Score Board Start===================
function resetScore(){
  $('#resetScore').click(function(){
    $('#round-num').text(0);

    for (i = 0; i < $('.playerScore').length; i++){
      $('.playerScore')[i].textContent = 0
    }

  });
}
// ===================Reset Score Board End===================



// ===================Tally Score For Player===================
function addOne(player){
  var plusOneButton = player.find('.plus1');
  plusOneButton.click(function(){
    console.log('add 1');
    var player = this.parentElement;
    var currentScoreString = this.parentNode.childNodes[1].textContent;
    var currentScore = parseInt(currentScoreString);
    var newScore = currentScore + 1;
    this.parentNode.childNodes[1].textContent = newScore;
    // debugger
  });
}

function addFive(player){
  var plusFiveButton = player.find('.plus5')
  plusFiveButton.click(function(){
    console.log('add 5');
    var player = this.parentElement
    var currentScoreString = this.parentNode.childNodes[1].textContent
    var currentScore = parseInt(currentScoreString);
    var newScore = currentScore + 5
    this.parentNode.childNodes[1].textContent = newScore;
    // debugger
  });
};

function addTen(player){
  var plusTenButton = player.find('.plus10')
  plusTenButton.click(function(){
    console.log('add 10');
    var player = this.parentElement
    var currentScoreString = this.parentNode.childNodes[1].textContent
    var currentScore = parseInt(currentScoreString)
    var newScore = currentScore + 10
    this.parentNode.childNodes[1].textContent = newScore
    // debugger
  })
};

function minusTen(player){
  var minusTenButton = player.find('.minus10')
  minusTenButton.click(function(){
    console.log('minus 10');
    var player = this.parentElement
    var currentScoreString = this.parentNode.childNodes[1].textContent
    var currentScore = parseInt(currentScoreString);
    var newScore = currentScore - 10;
    this.parentNode.childNodes[1].textContent = newScore;
    // debugger
  });
};

function minusOne(player){
  var minusOneButton = player.find('.minus1')
  minusOneButton.click(function(){
    console.log('minus 1');
    var player = this.parentElement
    var currentScoreString = this.parentNode.childNodes[1].textContent;
    var currentScore = parseInt(currentScoreString);
    var newScore = currentScore - 1
    this.parentNode.childNodes[1].textContent = newScore;
    // debugger
  })
};
// ===================Tally Score For Player End===================