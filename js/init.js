 $(document).ready(function() 
 {
    $('select').material_select();
    $('.scrollspy').scrollSpy();
 });
 
 $('.datepicker').pickadate({
                            selectMonths: true, // Creates a dropdown to control month
                            selectYears: 15, // Creates a dropdown of 15 years to control year,
                            today: 'Today',
                            clear: 'Clear',
                            close: 'Ok',
                            closeOnSelect: false // Close upon selecting a date,
                            });


$("#datepicker").datepicker({changeMonth: true, maxDate: '0',changeYear: true, yearRange: '1960:2017', dateFormat: 'dd-mm-yy',});

$('.timepicker').pickatime({
                            default: 'now', // Set default time: 'now', '1:30AM', '16:30'
                            fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
                            twelvehour: false, // Use AM/PM or 24-hour format
                            donetext: 'OK', // text for done-button
                            cleartext: 'Clear', // text for clear-button
                            canceltext: 'Cancel', // Text for cancel-button
                            autoclose: false, // automatic close timepicker
                            ampmclickable: true, // make AM PM clickable
                            aftershow: function(){} //Function for after opening timepicker
                            });

 
 // Pause slider
 $('.slider').slider('pause');
 // Start slider
 $('.slider').slider('start');
 // Next slide
 $('.slider').slider('next');
 // Previous slide
 $('.slider').slider('prev');
 
 $(document).ready(function(){
                   $('.slider').slider();
                   });
 
 function rem(){
    Materialize.Toast.removeAll();
}

 function rem3(){
     window.location.href = "homepage.html";
}
 
 function rem2(){
     window.location.href = "Login.html";
}

 function btnSubmit(){
    alert("Submitted successfully!!")
}

function btnsubmit3()
{   
    var $toastContent = $('<div>User Settings updated</div>').add($('<button class="btn-flat toast-action" onclick = "rem()">Close</button>'));
    Materialize.toast($toastContent, 10000);
}


function snooze5(){
    Materialize.Toast.removeAll();
    setTimeout(function(){show();},5000);
}

function snooze25(){
    Materialize.Toast.removeAll();
    setTimeout(function(){show();},25000);
}

function show(){
    var songname = "apex";
    var song = document.getElementById(songname);
    song.play();
    var $toastContent = $('<p>It is time to take your medicine !!  <br> Dietary restrictions : Avoid alcohol for 2 hours</p>').add($('<button class="btn-flat toast-action" onclick = "rem()">Taken</button>'));
    var $toastContent = $toastContent.add($('<div><button class="btn-flat toast-action" onclick = "snooze5()">Snooze</button></div>'));
    var $toastContent = $toastContent.add($('<button class="btn-flat toast-action" onclick = "snooze25()">Remind me in 30minutes</button>'));
    var $toastContent = $toastContent.add($('<button class="btn-flat toast-action" onclick = "snooze25()">Missed</button>'));
    Materialize.toast($toastContent, 8000,'',function(){
        var songname = "apex";
        var song = document.getElementById(songname);
        song.pause();
    })


}



function btnsubmit4()
{
    var $toastContent = $('<div>Report Sent to doctor</div>').add($('<button class="btn-flat toast-action" onclick = "rem()">Close</button>'));
    Materialize.toast($toastContent, 10000);
   
}


function btnsubmit()
{
    var $toastContent = $('<div>Pill Added</div>').add($('<button class="btn-flat toast-action" onclick = "rem()">Close</button>'));
    Materialize.toast($toastContent, 10000);
   
}


function Send2Doc()
{
    var $toastContent = $('<div>Sent Report to doctor</div>').add($('<button class="btn-flat toast-action" onclick = "rem()">Close</button>'));
    Materialize.toast($toastContent, 10000);
   
}
function WIP()
{
  alert("Prototype 3 Coming soon!!");

}

function btnsubmit1()
{

    var $toastContent = $('<div>Sign Up Successfull!</div>').add($('<button class="btn-flat toast-action" onclick = "rem2()">Close</button>'));
    Materialize.toast($toastContent, 10000);
   
}
function btnsubmit22()
{
    var $toastContent = $('<div>If you have entered a registered email ID, you will receive an email shortly.</div>').add($('<button class="btn-flat toast-action" onclick = "rem2()">Close</button>'));
    Materialize.toast($toastContent, 10000);
   
}


function btnsubmit2()
{
    var $toastContent = $('<div>If you have entered a registered email ID, you will receive an email shortly.</div>').add($('<button class="btn-flat toast-action" onclick = "rem()">Close</button>'));
    Materialize.toast($toastContent, 10000);
   
}
 
 function btnsubmit33()
{
    var $toastContent = $('<div>Changed password successfully!</div>').add($('<button class="btn-flat toast-action" onclick = "rem()">Close</button>'));
    Materialize.toast($toastContent, 10000);
    
}
 
 function dl()
{
    var $toastContent = $('<div>Your report has been downloaded.</div>').add($('<button class="btn-flat toast-action" onclick = "rem()">Close</button>'));
    Materialize.toast($toastContent, 10000);
    
}
 function st()
{
    var $toastContent = $('<div>Your report has been sent.</div>').add($('<button class="btn-flat toast-action" onclick = "rem()">Close</button>'));
    Materialize.toast($toastContent, 10000);
    
}

function delete1()
{
    var $toastContent = $('<div>Your reminder has been deleted.</div>').add($('<button class="btn-flat toast-action" onclick = "rem()">Close</button>'));
    Materialize.toast($toastContent, 10000);
    
}

function login(){
    var name = document.getElementById("Username").value;
    var password = document.getElementById("password").value;

    if (name=="John"&&password=="john123"){
        window.location.href = "ring.html";
    }
    else if (name =="Jack"&&password=="jack123"){
        window.location.href = "ring2.html";
    }
    else{
        var $toastContent = $('<div>Wrong Login Info.</div>').add($('<button class="btn-flat toast-action" onclick = "rem()">Close</button>'));
        Materialize.toast($toastContent, 100000);
    }
}
