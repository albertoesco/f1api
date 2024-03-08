const API = "https://api.openf1.org/v1";

export async function getDriversByNumber() {
    const data = await fetch(`${API}/drivers`);
    const json = await data.json();
    return json;
}