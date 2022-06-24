export default function getApi() {
  return new Promise((resolve, reject) => {
    let url = "http://localhost:3001/items";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}
