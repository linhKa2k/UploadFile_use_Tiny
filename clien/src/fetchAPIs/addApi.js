export default function addApi(data) {
  return new Promise((resolve, reject) => {
    let url = "http://localhost:3001/items";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}
