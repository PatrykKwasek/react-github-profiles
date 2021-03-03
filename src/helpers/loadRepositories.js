import { getData } from "../components/Api/Api";

const loadRepositories = (inputData, setUserRepos, userRepos, setRepoPage, repoPage, setLoadUserRepos, setUnauthorizedAccess) => {
  return getData(`${inputData.search_user}/repos?page=${repoPage}&per_page=5`).then(response => {
    if (response.data.length > 0) {
      setUserRepos(userRepos.concat(response.data));
      setRepoPage(repoPage + 1);
    } else {
      setLoadUserRepos(true);
    }
  }).catch(error => {
    error.response.status === 403 && setUnauthorizedAccess(true);
  })
};