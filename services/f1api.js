
export async function getDrivers(page = 1) {
    const data = await fetch(`https://api.openf1.org/v1/drivers`);
    const json = await data.json();
    return json;
}