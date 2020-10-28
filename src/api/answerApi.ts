export const answerApi = async (guess: string) => {
  return fetch(`${process.env.REACT_APP_API_PATH}/answer?guess=${guess}`, {
    method: process.env.NODE_ENV === "development" ? "GET" : "POST",
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => data);
};
