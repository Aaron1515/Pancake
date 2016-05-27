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
  changeScore();
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
    // debugger
    $('table').append("<tr><td>" + playerName + "</th><td>0</td><td class='btn-sm btn-success'>+1</td><td class='btn-sm btn-success'>+5</td><td class='btn-sm btn-success'>+10</td><td class='btn-sm btn-danger'>-10</td><td class='btn-sm btn-danger'>-1</td></tr>");
  $('#player-name')[0].value = "";
  });

}

function resetScore(){
  $('#resetScore').click(function(){
    $('#round-num').text(0);
  });
}

function changeScore(){
  $('#plus1').click(function(){
    console.log('add 1');
    var player = this.parentElement

    debugger
  })
}