const API = "https://api.openf1.org/v1";

export async function getDriversByNumber(driver_number) {
    const data = await fetch(`${API}/drivers/${driver_number}`);
    const json = await data.json();
    return json;
}