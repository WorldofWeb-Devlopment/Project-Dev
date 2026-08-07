const inputbox = document.getElementById("box");
const copyBtn = document.getElementById("copy-btn");
const silderControl = document.getElementById("silder-control");
const sliderLength = document.getElementById("slider-length");
const upperCase = document.getElementById("upper-case");
const lowerCase = document.getElementById("lower-case");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const passwordBtn = document.getElementById("password-btn");
const indicatorBar = document.getElementById("indicator-bar");
const passwordStrength = document.getElementById("password-strength");


silderControl.addEventListener("input",() => {
    sliderLength.textContent = silderControl.value;
})

passwordBtn.addEventListener("click", checkpassword)

function checkpassword() {
    const length = Number(silderControl.value);
    const hasUpperCaseChecked = upperCase.checked;
    const hasLowerCaseChecked = lowerCase.checked;
    const hasnumbersChecked = numbers.checked;
    const hassymbolsChecked = symbols.checked;

    if (!hasUpperCaseChecked &&
        !hasLowerCaseChecked &&
        !hasnumbersChecked &&
        !hassymbolsChecked) {
         alert("Pleasen Check Any CheckBox")
    }
}
