var chatid = "AoLFvMEflv-oMgnfRxg";
var token = "001.1125707302.2110502077:751305137";

function otpravka(token,chatid,new_line){
  var names = document.getElementById("name").value;
  var phones = document.getElementById("phone").value;
  var src = document.getElementById("message").value;
  var text = src.split(new_line || "%0A");
  var text2 = text.join("%0A");
  var text3 = "ФИО: " + names + "%0A" + "Телефон: " + phones + "%0A" + "Сообщение:%0A" + text2
  var z=$.ajax({
  type: "POST",  
  url: "https://api.icq.net/bot/v1/messages/sendText?token="+token+"&chatId="+chatid+"&text="+text3,
  });
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
  document.getElementById("name").onkeyup=check();
  document.getElementById("phone").onkeyup=check();
  document.getElementById("message").onkeyup=check();
  document.getElementById('formSend').style.display = "none";
  document.getElementById('formSendGoal').style.display = "block";
 };
 function check() {
  var inp1 = document.getElementById('name'),
      inp2 = document.getElementById('phone'),
      inp3 = document.getElementById('message');
  document.getElementById('send').disabled = inp1.value && inp2.value && inp3.value ? false : "disabled";
};