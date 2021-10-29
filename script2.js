/* The second task */


function min(a, b) {
    let minNum = Math.min(a, b);
    document.write("Минимальное число -" + minNum);
};

function main_min() {
    let a = prompt("Введите число");
    let b = prompt("Введите второе число");
    min(a, b);
}


let task7 = document.getElementById("task7");
task7.addEventListener("click", main_min, false);