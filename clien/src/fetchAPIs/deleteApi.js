export default function deleteApi(data) {
  return new Promise((resolve, reject) => {
    let url = `http://localhost:3001/items/${data.id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}
