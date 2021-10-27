
function tri() {
    let c = '#';
    let d = 7;
    do {
        document.write(c + "<br>");
        c += '#'
    } while (c.length <= d);
};

function sec() {
    for (let a = 1; a <= 100; a++) {
        if (a % 3 == 0 && a % 5 == 0) {
            document.write("FizzBizz" + " ");
        } else if (a % 3 == 0) {
            document.write("Fizz" + " ");
        } else if (a % 5 == 0) {
            document.write("Bizz" + " ");
        } else {
            document.write(a + " ");
        }
    };

};


function third() {
    for (let t = 2; t <= 10; t = t + 2) {
        document.write(t + " ");
    };
};

function fouth() {
    let r = prompt('Введите число больше чем 100');
    while (r < 100) {
        r = prompt('Ваше число не больше чем 100, введите еще');
    }
};

function fifth() {
    in1: for (let r = 2; r < 10; r++) {
        for (let n = 2; n < r; n++) {
            if (r % n == 0) {
                continue in1;
            }
        }
        document.write(r + " ");
    }
};

function sixth() {
    for (let a = 1; a <= 8; a++) {
        for (let i = 1; i < 8; i++) {
            if (a % 2) {
                if (i % 2) document.write("#"); else document.write("..");
            }
            if (!(a % 2)) {
                if (i % 2) document.write(".."); else document.write("#");
            }
        }
        document.write("<br>");
    }
};



let task1 = document.getElementById("task1");
task1.addEventListener("click", tri, false);

let task2 = document.getElementById("task2");
task2.addEventListener("click", sec, false);

let task3 = document.getElementById("task3");
task3.addEventListener("click", third, false);

let task4 = document.getElementById("task4");
task4.addEventListener("click", fouth, false);

let task5 = document.getElementById("task5");
task5.addEventListener("click", fifth, false);

let task6 = document.getElementById("task6");
task6.addEventListener("click", sixth, false);

