function getUserToken() {
  console.log('entrou no getUserToken');
  const userToken = localStorage.getItem('userToken');
  if (!userToken) localStorage.setItem('userToken', Math.random().toString(36).substr(2, 9));

}

export default getUserToken;