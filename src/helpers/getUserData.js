import { getData } from "../components/Api/Api";

const getUserData = (inputData, setUserData, setUnauthorizedAccess, setGetUserError) => {
  return getData(`${inputData.search_user}`).then(response => {
    setUserData(response.data);
  }).catch(error => {
    error.response.status === 403 ? setUnauthorizedAccess(true) : setGetUserError(true);
  })
};