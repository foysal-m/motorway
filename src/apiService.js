export const GetImagesAPI = () => {
  return fetch("images?limit=10")
    .then((res) => res.json())
    .then((data) => {
      console.log("Success:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const PostFormData = (body) => {
  return fetch("db", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
