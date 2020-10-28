export const setNickName = async (nickName: string) => {
  return fetch(`${process.env.REACT_APP_API_PATH}/setnickname/${nickName}`)
    .then((data) => {
      return data.json();
    })
    .then((data) => data);
};
