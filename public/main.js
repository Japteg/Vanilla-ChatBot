$(function () {
    var socket = io();

    $('form').submit(function(){
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });

  socket.on('postBotReply',function(botMsg){
    $('#messages').append(`<li>${botMsg}</li>`);
  })

  });
