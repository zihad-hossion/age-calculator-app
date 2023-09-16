const forms = document.querySelector("form");
const submitBtn = document.querySelector(".imgArrow");
//input item list
const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");
//output item list
const outDay = document.getElementById("outDay");
const outMonth = document.getElementById("outMonth");
const outYear = document.getElementById("outYear");

const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function checkValid() {
    const alInt = document.querySelectorAll("input");
    let valiDation = true;

    for (let i of alInt) {
        const parent = i.parentElement;
        let preItem = i.previousElementSibling;
        if (!i.value) {
            i.style.borderColor = "hsl(0, 100%, 67%)";
            preItem.style.color = "hsl(0, 100%, 67%)";
            parent.querySelector("small").innerText = "This field is required.";
            valiDation = false;
        } else {
            if (dayInp.value > months[monthInp.value - 1] || dayInp.value < 0) {
                dayInp.style.borderColor = "hsl(0, 100%, 67%)";
                dayInp.parentElement.querySelector("small").innerText = "Must be a valid day.";
                valiDation = false;

            } else if ((monthInp.value > 12) || monthInp.value < 0) {
                monthInp.style.borderColor = "hsl(0, 100%, 67%)";
                monthInp.parentElement.querySelector("small").innerText = "Must be a valid month.";
                valiDation = false;
            } else if (yearInp.value > y2 || yearInp.value < 0) {
                yearInp.style.borderColor = "hsl(0, 100%, 67%)";
                yearInp.parentElement.querySelector("small").innerText = "Must be in the past.";
                valiDation = false;
            } else {
                preItem.style.color = "hsl(0, 1%, 44%)";
                i.style.borderColor = "black";
                parent.querySelector("small").innerText = "";
                valiDation = true;
            }
        }
    }
    return valiDation;
}

let date = new Date();
let d2 = date.getDate();
let m2 = 1 + date.getMonth();
let y2 = date.getFullYear();
let ageCalc = () => {
    if (checkValid()) {
        let d1 = dayInp.value;
        let m1 = monthInp.value;
        let y1 = yearInp.value;
        if (d1 > d2) {
            d2 += months[m2 - 1];
            m2 -= 1;
        }
        if (m1 > m2) {
            m2 += 12;
            y2 -= 1;
        }
        let d = d2 - d1;
        let m = m2 - m1;
        let y = y2 - y1;

        return `${outDay.innerText = d} ${outMonth.innerText = m} ${outYear.innerText = y}`;
    }
}

submitBtn.addEventListener("click", ageCalc);


