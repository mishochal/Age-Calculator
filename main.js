const button = document.querySelector(".btn");

const dayInput = document.querySelector(".day input");
const monthInput = document.querySelector(".month input");
const yearInput = document.querySelector(".year input");
const inputs = document.querySelectorAll(".user-inputs input");

const dayError = document.querySelector(".day .error-text");
const monthError = document.querySelector(".month .error-text");
const yearError = document.querySelector(".year .error-text");
const errorTexts = document.querySelectorAll(".error-text");

const yearsOutput = document.querySelector(".user-years span");
const monthsOutput = document.querySelector(".user-months span");
const daysOutput = document.querySelector(".user-days span");

const makeOutput = (day, month, year) => {
    daysOutput.innerText = day;
    monthsOutput.innerText = month;
    yearsOutput.innerText = year;
}

const resetStyles = () => {
    errorTexts.forEach((errorText) => {
        errorText.style.display = "none";
    });
    inputs.forEach((input) => {
        input.style.borderColor = "#8a8a8a";
    });
}

const calculateAge = () => {
    resetStyles();
    const day = dayInput.value;
    const month = monthInput.value - 1;
    const year = yearInput.value;
    const currDate = new Date();
    let currDay = currDate.getDate();
    let currMonth = currDate.getMonth();
    let currYear = currDate.getFullYear();
    let dayDiff = currDay - day;
    if (dayDiff < 0) {
        dayDiff += new Date(currYear, currMonth, 0).getDate();
        currMonth--;
    }
    let monthDiff = currMonth - month;
    if (monthDiff < 0) {
        monthDiff += 12;
        currYear--;
    }
    let yearDiff = currYear - year;
    makeOutput(dayDiff, monthDiff, yearDiff);
}

button.addEventListener("click", calculateAge);