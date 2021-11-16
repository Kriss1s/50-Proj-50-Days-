const btn = document.querySelectorAll('.btn');
const circle = document.querySelectorAll(".circle");
const progress = document.querySelector(".progress");
const btn1 = document.querySelector('#btn1');
const disBtn1 = document.querySelector(".disabled")
const btn2 = document.querySelector('#btn2');

btn2.addEventListener("click", function () {
    for (let i = 1; i < circle.length; i++) {
        if (i >= 1) {
            btn1.disabled = false;
            btn1.classList.remove("disabled");
        }
        if (circle[i].classList.contains('active') === false) {
            progress.style.width = `${33.3 * i}%`
            return circle[i].classList.add('active');
        }
    }

})
btn1.addEventListener("click", function () {
    for (let i = circle.length - 1; i > 0; i--) {
        if (i <= 1) {
            btn1.disabled = true;
            btn1.classList.add("disabled");
        }
        progress.style.width -= `${33.3 * i}%`
        if (circle[i].classList.contains('active')) {
            progress.style.width = `${33.3 * (i - 1)}%`
            return circle[i].classList.remove('active');
        }
    }

})

// function() {
//     for (let i = 0; i < circle.length; i++) {
//         circle[i + 1].classList.add("active");
//     }
// }
