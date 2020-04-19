var mas = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"] // массив картинок
var to = -1; // Счетчик, указывающий на текущую картинки

function right_arrow() // Открытие следующей картинки(движение вправо)
{
    var obj = document.getElementById("img");
    if (to < mas.length) {
        to++;
        obj.src = mas[to];
        console.log(to.toString() + " " + mas[to] + " " + obj.src);
    }
    if (to == mas.length - 1) {
        to = -1;
        console.log(to.toString() + " " + mas[to] + " " + obj.src);
    }
}

function left_arrow() // Открытие предыдущей картинки(движение влево)
{
    var obj = document.getElementById("img");
    if (to <= mas.length - 1) {
        obj.src = mas[to];
        to--;
        console.log(to.toString() + " to-- left " + mas[to]);
    }
    if (to == 0) {
        to = mas.length - 1;
        console.log(to.toString() + " to-- left " + mas[to]);
    }
}