var chatid = "AoLFvMEflv-oMgnfRxg";
var token = "001.1125707302.2110502077:751305137";

function otpravka(token,chatid,new_line){
  var src = document.getElementById("message").value;
  //var text = src.split(new_line || /\r?\n/);
  var text = src.split(new_line || "%0A");
  var text2 = text.join("%0A");
  //<u>В Москве выявлено 33&nbsp;случая заболевания&nbsp;</u>
  var z=$.ajax({
  type: "GET",  
  url: "https://api.icq.net/bot/v1/messages/sendText?token="+token+"&chatId="+chatid+"&text="+text2,
  }); 
 };
 function check() {
  var inp1 = document.getElementById('name'),
      inp2 = document.getElementById('phone'),
      inp3 = document.getElementById('message');
  document.getElementById('send').disabled = inp1.value && inp2.value && inp3.value ? false : "disabled";
};