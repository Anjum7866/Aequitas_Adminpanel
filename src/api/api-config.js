import axios from 'axios'

export const AxiosWithToken = axios.create()

AxiosWithToken.interceptors.request.use((request) => requestHandler(request))
// AxiosWithToken.interceptors.response.use(
// 	response => response,
// 	error => errorResponseHandler(error)
// );

const requestHandler = (request) => {
  //const token = localStorage.getItem('token') || '';
  //console.log('token in api config', token);
  //request.headers['Authorization'] = `Bearer ${token}`;
  request.headers['accept'] = `*/*`
  request.headers['Content-Type'] = `application/json`
  return request
}

const errorResponseHandler = (error) => {
  const errorResponse = error.response
  // if the error status code is not 401 just retrun the error to the respective component 😑
  // Let component handle it 🤷🏼‍♂️
  // if (errorResponse.status !== 401) {
  // 	return Promise.reject(error);
  // }
  console.error('%cToken Expired 😥', 'while calling:', error.config.url)
}
