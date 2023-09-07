function getUserToken() {
  const userToken = localStorage.getItem('userToken');
  if (!userToken) localStorage.setItem('userToken', createUserToken());

}

function createUserToken() {
  return Math.random().toString(36).substr(2, 9)
}

export default getUserToken;