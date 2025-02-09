import { createContext, useState } from "react";
import {googleLogout, useGoogleLogin} from "@react-oauth/google";
import Cookies from "js-cookie";
import {fetchAndSetUserProfile} from "../Utils/Authentication";
import {useNavigate} from "react-router-dom";

export const Appcontext = createContext();


export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null);
console.log(user)
  const navigate = useNavigate();

  const handleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      Cookies.set('authToken', response.access_token)
      const userProfile = await fetchAndSetUserProfile(response.access_token);
      Cookies.set('user', JSON.stringify(userProfile));
      setUser(userProfile);
    },
    onError: (error) => console.log('Login Failed:', error)
  });


  const handleLogout = () => {
    googleLogout()
    Cookies.remove('authToken')
    Cookies.remove('user')

    setUser(null);
    navigate('/');
  };


  const [cartItems, setCartItems] = useState([])

  const price = cartItems.reduce((acc, el, i) => { return acc + Number(el.price) + Number(el.qty) }, 0)


  return (
    <Appcontext.Provider
      value={{
        handleLogin,
        handleLogout,
        cartItems,
        setCartItems,
        price,
        user,
        setUser
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};
