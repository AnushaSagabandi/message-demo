var loopHandle = null;
var count=1;
messageSystem = {
    showMessage: function(msg) {
        //alert(msg);
  var divnode = document.createElement("div");//Created a div to show the messages
  var divcount='divno'+count;              
  var textnode=document.createTextNode(msg);
  divnode.appendChild(textnode);
  divnode.setAttribute('id',divcount);   //setting divcount as ID
   setTimeout(function(){
 		divnode.parentNode.removeChild(divnode);
 		},3000);
    document.body.appendChild(divnode);

    var butnode = document.createElement("button"); 
    var buttoncount='buttonno'+count;
    var tnode = document.createTextNode("close");       
    butnode.appendChild(tnode);
    butnode.style.backgroundColor="red";
    butnode.setAttribute('id',buttoncount);
    divnode.appendChild(butnode);
    count=count+1;
 		 
$('#'+buttoncount).click(function() {
 	  $('#'+divcount).hide();
    } );
    }
}

function showMsg() {
    quotes = [
    "What we've got here is failure to communicate.",
    'Go ahead, make my day.',
    "I've got a bad feeling about this.",
    "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.",
    "I find your lack of faith disturbing.",
    "You're gonna need a bigger boat.",
    "Tell Mike it was only business.",
    "I have come here to chew bubble gum and kick ass, and I'm all out of bubble gum."
    ];
    messageSystem.showMessage(_.sample(quotes));
    
}

function loop() {
    showMsg();
    var rand = Math.round(Math.random() * (3000 - 500)) + 500;
    loopHandle = setTimeout(loop, rand);
}


$(function() {
   $('#msgButton').click(function() {
       var btn = $(this),
      btnTxt = btn.text();
       if (btnTxt === 'Start Messages') {
           alert("Messages are about to start");
           btn.text('Stop Messages');
           loopHandle = setTimeout(loop, 500);
       } else {
           btn.text('Start Messages');
          clearTimeout(loopHandle);
           loopHandle = null;
       }
   } );
});
