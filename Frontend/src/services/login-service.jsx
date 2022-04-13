import axios from 'axios'
//i used for temporary but it is not a good practice , to best practice follow the madhura mam my-app frontend
const baseURL = 'http://localhost:8080/signin'

const userLogin = (userCredenetails) => {
  console.log('in login service ', userCredenetails)
  //invoked backend "http://localhost:8080/signin" API
  return axios.post(`${baseURL}`, userCredenetails)
  //instance.post('',userCredenetails);
}

export default userLogin

// const instance= axios.create({
//     //URL to call backend restAPI
//     baseURL: 'http://localhost:8080/signin',
//     headers: {
//         'Content-Type': 'application/json', //FOR input put/patch
//       },
// });
