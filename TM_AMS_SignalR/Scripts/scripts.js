/*
	jQuery document ready
*/
$(function () {
    /***
		set timer countdown in seconds with callback
		where 10 define the second left in count.
		after 10 second it will show alert.
		wait for 10 second to see it.


        
        if you pass a string to timeTo() it attempts to parse it as a date.
        for now, pass the time period in seconds, 120s = 2mins
	*/
  
    
    var startTimer2$ = $('#countdown-1').timeTo(120,
        { start: false},
        function () { alert('countdown finsished'); });

   

    $('#timerStart').click(function () {
        console.log('please start the timer now');
        startTimer2$.timeTo('start', function () { alert('new callback'); });
    });
        
       
   
  
});