export const fetchDays = () => {
  return fetch("/alldata")
    .then(data => {
      return data.json();
    })
    .then(data => data);
};
