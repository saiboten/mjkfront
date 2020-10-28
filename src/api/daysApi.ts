export const fetchDays = async () => {
  return fetch(`${process.env.REACT_APP_API_PATH}/alldata`)
    .then((data) => {
      return data.json();
    })
    .then((data) => data);
};
