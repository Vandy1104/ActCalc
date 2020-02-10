console.log('Hey working');

document.getElementById('button1').addEventListener('click', function(){
  var u1 = parseInt(document.getElementById('u1').value);
  var u2 = parseInt(document.getElementById('u2').value);
  var u3 = parseInt(document.getElementById('u3').value);
  var u4 = parseInt(document.getElementById('u4').value);
  var u5 = parseInt(document.getElementById('u5').value);

  var total1 = u1 + u2 + u3 + u4 + u5;
  console.log(total1);
  document.getElementById('result1').value = total1;
});

document.getElementById('button2').addEventListener('click', function(){
  var a1 = parseInt(document.getElementById('a1').value);
  var a2 = parseInt(document.getElementById('a2').value);
  var a3 = parseInt(document.getElementById('a3').value);
  var a4 = parseInt(document.getElementById('a4').value);
  var a5 = parseInt(document.getElementById('a5').value);

  var total2 = a1 + a2 + a3 + a4 + a5;
  console.log(total2);
  document.getElementById('result2').value = total2;
});
