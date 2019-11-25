export function getLoginConfig({ email, password }){

    //Data from the form
    const userData = { email, password };
  
    //create string for axios
    const axiosData = Object.keys(userData).map((key) =>( encodeURIComponent(key) + '=' + encodeURIComponent(userData[key]))).join('&');
  
    //assemble the Axios Config
    const loginConfig = {
      url: 'http://127.0.0.1:8000/api/login',
      method: 'post',
      headers: {'Content-Type': "application/json",
       'X-Requested-With': 'XMLHttpRequest' },
      //data: axiosData,
      body: JSON.stringify({
        email: email,
        password: password,
      }),      
      responseType: 'json',
    }
  
    console.log('axios data', axiosData);
    console.log('login data', loginConfig);
  
    return loginConfig;
  
  }
  
  export function getLogoutConfig(token){
  
      //assemble the Axios Config with token
    return {
      url: 'http://127.0.0.1:8000/api/logout',
      method: 'get',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization' : 'Bearer ' + token},
      responseType: 'json',
    }
  
  
  }