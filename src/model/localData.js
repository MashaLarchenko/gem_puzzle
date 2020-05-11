
const getLocalData = () => {
  let data = {};
  if (localStorage.state && localStorage.state.length) {
    const localState = localStorage.getItem('state');
    data = JSON.parse(localState);
  }
  return data;
};

export default getLocalData;
