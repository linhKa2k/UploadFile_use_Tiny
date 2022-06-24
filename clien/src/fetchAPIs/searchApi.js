export default function getApi(data) {
  return new Promise((resolve, reject) => {
    let url = `http://localhost:3001/search?textSearch=${data.title}`;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}
