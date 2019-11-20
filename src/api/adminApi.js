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
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(data => {
      return data.json();
    })
    .then(data => data);
};

export const addDay = data => {
  return fetch(`${process.env.REACT_APP_API_PATH}/admin/day`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(data => {
      return data.json();
    })
    .then(data => data);
};

export const deleteDay = day => {
  return fetch(`${process.env.REACT_APP_API_PATH}/admin/day/${day}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(data => {
      return data.json();
    })
    .then(data => data);
};
