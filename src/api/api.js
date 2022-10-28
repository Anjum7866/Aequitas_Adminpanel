import { AxiosWithToken } from './api-config'

const API_URL = 'http://localhost:8000'

const getUserList = () => {
  const res = AxiosWithToken.get(`${API_URL}/users`)
  return res
}
const getUserById = (userId) => {
  const res = AxiosWithToken.get(`${API_URL}/users?user_id=${userId}`)
  return res
}
const addUser = (payload) => {
  try {
    const res = AxiosWithToken.post(`${API_URL}/users`, payload)
    return res
  } catch (error) {
    console.log('error adding user', error)
  }
}

const updateUser = (userId, payload) => {
  const res = AxiosWithToken.patch(`${API_URL}/users/${userId}`, payload)
  return res
}
const deleteUser = (userId) => {
  const res = AxiosWithToken.delete(`${API_URL}/users/${userId}`)
  return res
}

export { getUserList, getUserById, addUser, updateUser, deleteUser }
