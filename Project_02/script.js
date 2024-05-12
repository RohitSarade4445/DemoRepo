const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    document.querySelector("#result").innerHTML = bmi;

    if (bmi < 18.6) {
        document.querySelector("#weight-guide").innerHTML = "Under Weight";
    }
    if (bmi > 18.6 && bmi < 24.9) {
        document.querySelector("#weight-guide").innerHTML = "Normal Weight";
    }
    if (bmi > 24.9) {
        document.querySelector("#weight-guide").innerHTML = "Over Weight";
    }
});
