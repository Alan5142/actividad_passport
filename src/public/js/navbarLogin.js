const loginElement = document.querySelector('.login');
const logoutElement = document.querySelector('.logout');
fetch('http://localhost:3000/auth/verifyLogin')
  .then((response) => {
    if (response.status === 401)
      loginElement.style.removeProperty('display');
    else if (response.status === 200)
      logoutElement.style.removeProperty('display');
    else
      loginElement.style.removeProperty('display');
  }).catch((err) => {
    loginElement.style.removeProperty('display');
  });