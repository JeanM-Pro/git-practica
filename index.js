const ciudades = [];
const kelvinToCelcius = 273.15;

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const apiKey = "badddd2b48053599a878e99039eefbbc";
  const ciudadInput = document.getElementById("ciudad").value;
  const contenedor = document.getElementById("tarjetas-container");

  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&q=${ciudadInput}`
  )
    .then((response) => response.json())
    .then((data) => {
      const { temp, temp_max, temp_min, feels_like } = data.list[0].main;
      const newData = {
        ciudad: ciudadInput,
        temperatura: temp - kelvinToCelcius,
        maxTemp: temp_max - kelvinToCelcius,
        minTemp: temp_min - kelvinToCelcius,
        likeFeels: feels_like - kelvinToCelcius,
      };

      ciudades.unshift(newData);

      document.getElementById("ciudad").value = "";
      mostrarTarjetas();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

function mostrarTarjetas() {
  const contenedor = document.getElementById("tarjetas-container");
  contenedor.innerHTML = "";

  ciudades.forEach((datos) => {
    const tarjeta = `
      <div class="container animate__animated animate__fadeInDown" >
        <div class="imagen"><span class="valor">${datos.temperatura.toFixed(
          
        )}°C</span></div>
        <div class="card-body">
          <h5 class="card-title"> ${datos.ciudad
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}</h5>
          <p class="card-text">Max. Temp: ${datos.maxTemp.toFixed(2)}°C</p>
          <p class="card-text">Min. Temp: ${datos.minTemp.toFixed(2)}°C</p>
          <p class="card-text">Sensacion termica: ${datos.likeFeels.toFixed(
            2
          )}°C</p>
        </div>
      </div>
    `;

    contenedor.innerHTML += tarjeta;
  });
}
