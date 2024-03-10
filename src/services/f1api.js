const API = "https://api.openf1.org/v1";

export async function getDriversByNumber() {
    // Realiza una solicitud GET a la API para obtener datos de pilotos
    const data = await fetch(`${API}/drivers`);
    // Convierte la respuesta en formato JSON
    const json = await data.json();
    // Retorna los datos obtenidos en formato JSON
    return json;
}
