
    const buttonClima = document.getElementById('button-clima');
    
      const formulario = document.getElementById('myFor') 
      formulario.addEventListener('submit', (e)=>{
        e.preventDefault()
        const input = document.getElementById('ciudad').value;

        const apiKey = 'badddd2b48053599a878e99039eefbbc'; // Reemplaza con tu clave de API de OpenWeatherMap
        const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&q=${input}`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        const datos = {temperaturaMax: 287.67, 

          };
        })
        .catch(error => {
          console.error('Error:', error);
        });
      });
    
      let agregarCiudades = []
      

 
  