
$(function () {


    // get a proxy to the signalr hub
    var xHub = $.connection.timerHub;
    




    // next, define the functions the SERVER can call on the client side via signalr
    xHub.client.startTimerNow = function() {
        console.log('startTimerNow was called on client by server');
        
        $('#countdown-1').timeTo('start', function () { alert('new callback'); });
        // call the element to start the timer here
    };

    xHub.client.stopTimerNow = function() {
        console.log('stopTimerNow was called on client by server');
        $('#countdown-1').timeTo('stop');
    
    };


    // kick off the signalr connection to the server
    $.connection.hub.start().done(function (state) {
        console.log('signalr is started and ready');
        

        // then add the client side events that will use the signalr connection. click in this case
        $('#timerStartSignalr').click(function () {
            console.log('click event START - calling servers startTimer from client');
            xHub.server.startTimer();
        });

        $('#timerStopSignalr').click(function() {
            console.log('click event STOP - calling servers stopTimer from client');
            xHub.server.stopTimer();
        });
    });
    
    
    

});


