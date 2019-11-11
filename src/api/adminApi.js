export const fetchAdminData = () => {
  return fetch(`${process.env.REACT_APP_API_PATH}/admin/alldata`)
    .then(data => {
      return data.json();
    })
    .then(data => data);
};
