var mas = ["1.jpg","2.jpg","3.jpg","4.jpg"] // массив картинок
var to = 0;  // Счетчик, указывающий на текущую картинки

var i=0;
var timer;

function slideShow() // Открытие следующей картинки(движение вправо)
{
  timer=setInterval(right_arrow,2000);
}


function right_arrow() // Открытие следующей картинки(движение вправо)
{ 
  var obj = document.getElementById("img");
  if (to < mas.length-1)  
  {
     to++;
     obj.src = mas[to];
  }
  if (to == mas.length-1)
  {
    to = -1;
  }
}

function left_arrow() // Открытие предыдущей картинки(движение влево)
{     
  var obj = document.getElementById("img");
  if (to > 0) 
  {
    to--;
    obj.src = mas[to];
  }
  if (to == 0)
  {
    to = -1;
  }
}