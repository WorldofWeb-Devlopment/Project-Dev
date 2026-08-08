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

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?/";

silderControl.addEventListener("input", () => {
  sliderLength.textContent = silderControl.value;
});

passwordBtn.addEventListener("click", checkpassword);

function checkpassword() {
  const length = Number(silderControl.value);
  const hasUpperCaseChecked = upperCase.checked;
  const hasLowerCaseChecked = lowerCase.checked;
  const hasnumbersChecked = numbers.checked;
  const hassymbolsChecked = symbols.checked;

  if (
    !hasUpperCaseChecked &&
    !hasLowerCaseChecked &&
    !hasnumbersChecked &&
    !hassymbolsChecked
  ) {
    alert("Pleasen Check Any CheckBox");
  }

  const newPassword = createRandomPassword(
    length,
    hasUpperCaseChecked,
    hasLowerCaseChecked,
    hasnumbersChecked,
    hassymbolsChecked,
  );

  inputbox.value = newPassword;

  function createRandomPassword(
    length,
    hasUpperCaseChecked,
    hasLowerCaseChecked,
    hasnumbersChecked,
    hassymbolsChecked,
  ) {
    let allCharacters = "";

    if (hasUpperCaseChecked)  allCharacters+= uppercaseLetters;
    if (hasLowerCaseChecked)  allCharacters+= lowercaseLetters;
    if (hasnumbersChecked)  allCharacters+= numberCharacters;
    if (hassymbolsChecked)  allCharacters+= symbolCharacters;

    let password=""; 

    for (let i = 0; i < length; i++) {
        const randomIndex  = Math.floor(Math.random()*allCharacters.length) 
        password+=allCharacters[randomIndex]
        
        console.log(password)
        console.log(allCharacters)
    }
    return password;

  }
}
