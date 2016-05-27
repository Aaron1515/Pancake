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
    eventBindings()
});

function eventBindings(){
  upInRound();
  downInRound();
  addPlayer();
  addOne();
  addFive();
  addTen();
  minusOne();
  minusTen();
  resetScore();
}

// ===================Bidding stop===================


var counter = 0


// Go up in round when clicked on add button.
function upInRound(){
  $('img#add-round.score-btn').click(function(){
    console.log('somthing');
    counter++;
    $('#round-num').text(counter);

  })
}

// Go down in round when clicking on minus button.
function downInRound(){
  $('img#minus-round.score-btn').click(function(){
    console.log('somthing');
    counter--;
    $('#round-num').text(counter);
  })
}

function addPlayer(){
  $('a.btn.btn-success').click(function(e){
    var playerName = $('#player-name')[0].value
    $('table').append("<tr class='player-stat'><td>test</th><td id='score'>0</td><td class='btn-sm btn-success plus1'>+1</td><td class='btn-sm btn-success plus5'>+5</td><td class='btn-sm btn-success plus10'>+10</td><td class='btn-sm btn-danger minus10'>-10</td><td class='btn-sm btn-danger minus1'>-1</td></tr>");
  $('#player-name')[0].value = "";
  });
};

function resetScore(){
  $('#resetScore').click(function(){
    $('#round-num').text(0);
  });
}

function addOne(){
  $('.plus1').click(function(){
    console.log('add 1');
    var player = this.parentElement
    var currentScoreString = this.parentNode.childNodes[2].textContent
    var currentScore = parseInt(currentScoreString)
    var newScore = currentScore + 1
    this.parentNode.childNodes[2].textContent = newScore
    // debugger
  });
};

function addFive(){
  $('.plus5').click(function(){
    console.log('add 5');
    var player = this.parentElement
    var currentScoreString = this.parentNode.childNodes[2].textContent
    var currentScore = parseInt(currentScoreString)
    var newScore = currentScore + 5
    this.parentNode.childNodes[2].textContent = newScore
    // debugger
  });
};

function addTen(){
  $('.plus10').click(function(){
    console.log('add 10');
    var player = this.parentElement
    var currentScoreString = this.parentNode.childNodes[2].textContent
    var currentScore = parseInt(currentScoreString)
    var newScore = currentScore + 10
    this.parentNode.childNodes[2].textContent = newScore
    // debugger
  })
};

function minusTen(){
  $('.minus10').click(function(){
    console.log('minus 10');
    var player = this.parentElement
    var currentScoreString = this.parentNode.childNodes[2].textContent
    var currentScore = parseInt(currentScoreString)
    var newScore = currentScore - 10
    this.parentNode.childNodes[2].textContent = newScore
    // debugger
  })
};

function minusOne(){
  $('.minus1').click(function(){
    console.log('minus 1');
    var player = this.parentElement
    var currentScoreString = this.parentNode.childNodes[2].textContent
    var currentScore = parseInt(currentScoreString)
    var newScore = currentScore - 1
    this.parentNode.childNodes[2].textContent = newScore
    // debugger
  })
};



