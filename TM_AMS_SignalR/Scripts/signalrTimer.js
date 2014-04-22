
$(function () {


    // get a proxy to the signalr hub
    var xHub = $.connection.timerHub;
    
    // next, define the functions the server can call on the client side via signalr

    xHub.client.startTimerNow = function() {
        console.log('startTimerNow was called');
        // call the element to start the timer here
    };

    $.connection.hub.start().done(function (state) {
        console.log('signalr is started and ready');
        
        $('#timerStartSignalr').click(function () {
            xHub.server.startTimer();
        });
    });
    
    
    

});


