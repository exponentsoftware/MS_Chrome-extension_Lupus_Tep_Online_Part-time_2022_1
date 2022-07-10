const input = document.querySelector(".input_text");
const city = document.querySelector("#name");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");
const clouds = document.querySelector(".clouds");
const button = document.querySelector(".submit");
const apiKey = "50a7aa80fa492fa92e874d23ad061374";

button.addEventListener("click", async function () {
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const tempValue = data.main.temp;
      const nameValue = data.name;
      const descValue = data.weather[0].description;

      city.innerHTML = nameValue;
      desc.innerHTML = `<strong>Description:</strong> ${descValue}`;
      temp.innerHTML = `<strong>Temprature:</strong> ${tempValue} &#8451;`;
      input.value = ``;
    })

    .catch(
      (error) => (
        (city.innerHTML = `<h6>Wrong City Name </h6>`),
        (desc.innerHTML = ``),
        (temp.innerHTML = ``),
        (input.value = ``)
      )
    );
});
