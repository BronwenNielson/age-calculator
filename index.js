// Output elements
const outputYear = document.querySelector(".output-year");
const outputMonth = document.querySelector(".output-month");
const outputDay = document.querySelector(".output-day");
const submitBtn = document.querySelector(".submit-btn");

// input elements
let isValid = false;
const inputYear = document.querySelector("#year");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");

// ERROR ELEMENTS
const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");

submitBtn.addEventListener('click', calculateDate);

inputDay.addEventListener('input', (e) => {
    if (+inputDay.value > 31) {
        errorDay.textContent = "Must be a valid date";
        isValid = false;
        return;
    } else {
        isValid = true;
        errorDay.textContent = "";
    }
    if (+inputDay.value === 0) {
        errorDay.textContent = "This field is required";
        isValid = false;
        return;
    } else {
        errorDay.textContent = "";
    }
});

inputMonth.addEventListener('input', (e) => {
    if (+inputMonth.value > 12) {
        errorMonth.textContent = "Must be a valid date";
        isValid = false;
        return;
    } else {
        isValid = true;
        errorMonth.textContent = "";
    }
    if (+inputMonth.value === 0) {
        errorMonth.textContent = "This field is required";
        isValid = false;
        return;
    } else {
        errorMonth.textContent = "";
    }
});

inputYear.addEventListener('input', (e) => {
    if (+inputYear.value > 2024) {
        errorYear.textContent = "Must be a valid date";
        isValid = false;
        return;
    } else {
        isValid = true;
        errorYear.textContent = "";
    }
    if (+inputYear.value === 0) {
        errorYear.textContent = "This field is required";
        isValid = false;
        return;
    } else {
        errorYear.textContent = "";
    }
});

function calculateDate () {
    if (isValid) {
        let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
        let birthdayObj = new Date(birthday);
        let ageDiff = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiff);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay();

        outputDay.textContent = ageDay;
        outputMonth.textContent = ageMonth;
        outputYear.textContent = ageYears;

        console.log(ageDay);
    } else {
        alert("error");
    }
};