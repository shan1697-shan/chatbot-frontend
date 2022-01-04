
/*
function onIdleTimeOut() {
    let time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
   
    function resetTimer() {
        clearTimeout(time);   */
        // 1 min = 60000 milliseconds
        // 5 min = 300000 milliseconds
        /* To implement logout on idle uncomment below line */
        //time = setTimeout(logout, 300000);
   // }
//};

function userBusy(busy){
  var settings = {
    "url": "https://cybot.co/userstatus",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Authorization": "Basic YWdlbnQ6YWRtaW5AMTIz",
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "busy": busy
    }),
  };
  
  $.ajax(settings).done(function (response) {

    //console.log(response);
  });



}

window.addEventListener('beforeunload', function (e) {
   // e.preventDefault();
    //e.returnValue = '';
   // userBusy(true);
});

window.addEventListener('load', (event) => {
    //userBusy(false);
});
