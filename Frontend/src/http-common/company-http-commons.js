import axios from 'axios';

export default axios.create({
    //URL to call backend restAPI 
    baseURL: 'http://localhost:8080/api/company/',
    headers: {
        'Content-Type': 'application/json', //FOR input put/patch
      },
});