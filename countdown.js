//I can start a 25 minute, and the timer will go off once 25 minutes has elapsed.
 // I can reset the clock for my next.
 // I can customize the length of each time.

 
 $(document).ready(function(){

    var hrs;
    var min;
    var sec;
    var ring = false;
    var count = false;
    var stopinterval;

    const sec_count = 59;
    

    function time_show(){
        if (sec < 10) {
            $('#text_sec').text("0" + sec);
        } else{
            $('#text_sec').text(sec);
        } 
        if (min < 10) {
            $('#text_min').text("0" + min);
        } else{
            $('#text_min').text(min);
        } 
        if (hrs < 10) {
            $('#text_hr').text("0" + hrs);
        } else{
            $('#text_hr').text(hrs);
        } 
    }

    const count_control = function (){
        if(sec > 0){
            sec -= 1;
            time_show();
        } else if (min > 0) {
            min --;
            sec = sec_count;
            time_show();
        } else if (hrs > 0){
            hrs--
            min = sec_count;
            sec = sec_count;
            time_show();
        } else if (ring){
            $('#audio')[0].play();
            clearInterval(stopinterval);
            alert('Time is finished');
            count = false;

        }
    }

    var timer_start = function(){
        stopinterval= setInterval(count_control, 1000);
    }
    function Input_get(){
        if(count === false){
            hrs = parseInt($('#input_hr').val());
            min = parseInt($('#input_min').val());
            sec = parseInt($('#input_sec').val());
        }
        $('#input_time').text("Time: (" + parseInt($('#input_hr').val()) + ":" + parseInt($('#input_min').val()) + ":" + parseInt($('#input_sec').val()) +")");
        $('#input_form').hide();
        $('#input_time').show();
        $('#edit').show();

    }

    $('#timesa_input').on('click', function(){
        Input_get();
    });



// start button
 $('#timer_start').on('click',function(){
    if(count === false){
        Input_get();
        ring = true;
        count = true;
        timer_start();
     }
 });
    // reset button
  $('#timer_reset').on('click', function(){
      hrs = 0;
      min = 0;
      sec = 0;
      ring = false;
      count = false;
      clearInterval(stopinterval);
      time_show();
      $('#input_time').text("Time : (00:00:00)");
      $('#input_form').hide();
      $('#input_time').show();
      $('#edit').show();
      $('#mgr').html('');
      $('#input_hr').val('00');
      $('#input_min').val('00');
      $('#input_sec').val('00');
  });

  $('#input_form').hide();
  $('#edit').on('click', function(){
      $('#input_form').toggle();
      $('input_time').toggle();
      $('#edit').toggle();
  });
 });
