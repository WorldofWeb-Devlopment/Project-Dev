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
const symbolCharacters = "[!@#$%^&*()-_=+[\]{}|;:,.<>?/]";

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
    return;
  }

  const newPassword = createRandomPassword(
    length,
    hasUpperCaseChecked,
    hasLowerCaseChecked,
    hasnumbersChecked,
    hassymbolsChecked,
  );

  inputbox.value = newPassword;
  updateStatusBar(newPassword);

  function updateStatusBar(password) {
    let passwordLength = password.length;

    let hasUpperCase = /[A-Z]/.test(password);
    let hasLowerCase = /[a-z]/.test(password);
    let hasNumbers = /[0-9]/.test(password);
    let hasSymbols = /[!@#$%^&*()-_=+[\]{}|;:,.<>?/]/.test(password);

    let statusIndicatorScore = 0;
    statusIndicatorScore += Math.min(passwordLength * 2, 40);

    if (hasUpperCase) statusIndicatorScore += 15;
    if (hasLowerCase) statusIndicatorScore += 15;
    if (hasNumbers) statusIndicatorScore += 15;
    if (hasSymbols) statusIndicatorScore += 15;

    if (passwordLength < 8) {
      statusIndicatorScore = Math.min(statusIndicatorScore, 40);
    }

    const safeScore = Math.max(5, Math.min(100, statusIndicatorScore));
    indicatorBar.style.width = safeScore + "%";

    let indicatorBarText = "";
    let barColor = "";

    if (statusIndicatorScore < 40) {
      barColor = "#fc8181";
      indicatorBarText = "Weak";
    } else if (statusIndicatorScore < 70) {
      barColor = "#fbd38d";
      indicatorBarText = "Medium";
    } else {
      barColor = "#68d391";
      indicatorBarText = "Strong";
    }
    indicatorBar.style.backgroundColor = barColor;
    passwordStrength.textContent = indicatorBarText;
  }

  function createRandomPassword(
    length,
    hasUpperCaseChecked,
    hasLowerCaseChecked,
    hasnumbersChecked,
    hassymbolsChecked,
  ) {
    let allCharacters = "";

    if (hasUpperCaseChecked) allCharacters += uppercaseLetters;
    if (hasLowerCaseChecked) allCharacters += lowercaseLetters;
    if (hasnumbersChecked) allCharacters += numberCharacters;
    if (hassymbolsChecked) allCharacters += symbolCharacters;

    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];

      //   console.log(password);
      //   console.log(allCharacters);
    }
    return password;
  }
}

copyBtn.addEventListener("click", () => {
  navigator.clipboard
    .writeText(inputbox.value)
    .then(() => showCopy())
    .catch((error) => console.log("Could not Copy:", error));
});

function showCopy() {
  copyBtn.classList.remove("fa", "fa-copy");
  copyBtn.classList.add("fas", "fa-check");
  copyBtn.style.color = "#48bb78";
  setTimeout(() => {
    copyBtn.classList.remove("fas", "fa-check");
    copyBtn.classList.add("fa", "fa-copy");
  }, 1500);
}
