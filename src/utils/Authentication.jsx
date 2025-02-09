import axios from "axios";
import Cookies from "js-cookie";

export const fetchAndSetUserProfile = async (token) => {
    if (token) {
        try {
            const res = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json'
                }
            });
            Cookies.set('user', JSON.stringify(res.data));
            return res.data;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
    return null;
};