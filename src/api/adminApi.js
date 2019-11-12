export const fetchAdminData = () => {
  return fetch(`${process.env.REACT_APP_API_PATH}/admin/alldata`)
    .then(data => {
      return data.json();
    })
    .then(data => data);
};

export const updateDay = data => {
  return fetch(`${process.env.REACT_APP_API_PATH}/admin/update`, {
    method: "PUT",
    body: JSON.stringify(data)
  })
    .then(data => {
      return data.json();
    })
    .then(data => data);
};
