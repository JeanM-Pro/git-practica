// archivo script.test.js

const fetchMock = require("jest-fetch-mock");
const { JSDOM } = require("jsdom");
const { obtenerClima } = require("./script");

// Configurar Jest para utilizar JSDOM
const dom = new JSDOM();
global.document = dom.window.document;
global.fetch = fetchMock;

describe("Pruebas unitarias para obtenerClima", () => {
  test("Debería obtener los datos climáticos correctamente", async () => {
    // Mockear la respuesta de la API
    const mockData = {
      list: [
        {
          main: {
            temp: 300,
            temp_max: 310,
            temp_min: 290,
            feels_like: 295,
          },
        },
      ],
    };
    fetch.mockResponseOnce(JSON.stringify(mockData));

    // Llamar a la función a probar
    const newData = await obtenerClima("Caracas");

    // Verificar los resultados obtenidos
    expect(newData.ciudad).toBe("Caracas");
    expect(newData.temperatura).toBeCloseTo(26.85, 2);
    expect(newData.maxTemp).toBeCloseTo(36.85, 2);
    expect(newData.minTemp).toBeCloseTo(16.85, 2);
    expect(newData.likeFeels).toBeCloseTo(21.85, 2);
  });

  test("Debería manejar errores al obtener los datos climáticos", async () => {
    // Mockear una respuesta de error de la API
    fetch.mockRejectOnce(new Error("Error fetching data"));

    // Llamar a la función a probar
    try {
      await obtenerClima("CiudadInexistente");
    } catch (error) {
      expect(error.message).toBe("Error fetching data");
    }
  });
});
