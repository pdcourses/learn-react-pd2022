import config from './config';
import queryString from 'query-string';

export default function loadUsersFetch( options = {}){
     const defaultOptions = {
      page: 1,
      results: 10,
      seed: config.API_KEY,
      inc: config.PROPERTIES
     };

     const opt = {
      ...defaultOptions,
      ...options
     }; 

     const params = queryString.stringify(opt, {arrayFormat: 'comma'});

     return fetch(`${config.BASE_URL}?${params}`).then( (response) => response.json());
     
}

/*
import axios from 'axios';

const options = {
  results: 5,
  seed: 'PD2022',
  page: 1,
}

function loadRandomUsersFetch({results, seed, page}){
  (async () => {
    const response = fetch(`https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`)
    .then( (response) => {
      if(!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .then ( ({results})  => console.dir(results))
    .catch( (error) => console.log(error))
  })();
}

const configAxios = {
  timeout: 1000,
  inDownloadProgress: (event) => console.log(event.loaded),
  onUploadPropgress: (event) => console.log(event.loaded),
}

function loadRandomUsersAxios({results, seed, page}){
  (async () => {
    const response = await axios
    .get(`https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`,
    configAxios)
    .then( (response) => console.log(response.data.results))
    .catch( (error) => console.log(error.message))
  }) ();
}

*/