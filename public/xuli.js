var socket=io("http://localhost:3000");

socket.on("server-send-dkithatbai",function(){
  alert("Ten tai khoan da duoc nguoi khac su dung");
});

$(document).ready(function(){
   $("#loginform").show();
   $("#chatform").hide();
   $("#btnregister").click(function(){
   		socket.emit("client-send-data",$("#txtname").val())
   });
})