import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode'
// export const TOKEN_KEY = "@airbnb-Token";

export const isAuthenticated = () => {
  try{
    /*
      quando o token é gerado, por padrão ele inicia com a palavra 'Bearer'
      então eu separo o Beare do "corpo" do token com o split, 
      então eu pego o indice[1](o token)
    */
   
    // const token = localStorage.getItem('token');
    //console.log('****TOKEN DO LOCALSTORANGE***** '+token);
    const token = localStorage.getItem('token');

    if(!token) return false
    
    const parts = token.split(' ');

    if(!parts.lenght ===2) return false
    
    jwt.verify(token, 'PRIVATEKEY',(err,decoded)=>{
        if(err) return false
    })
    
    return true
    
}catch(erro){

    return false;

}
}
export const getToken = () => localStorage.getItem('token');

export const decode = () => {
  const token = localStorage.getItem('token');
  const user = jwtDecode(token);
  return user
}

export const login = data => {
  localStorage.setItem('token', JSON.stringify(data.token) );
  localStorage.setItem('authorization', JSON.stringify(data.authorization) );
  //localStorage.setItem('token', token);
};

export const logout = () => {
  localStorage.removeItem('token');
  window.location.reload();
};