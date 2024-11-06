import axios from "axios";

const persistedToken = localStorage.getItem('token');

const api = import.meta.env.VITE_API_KEY;
export const axiosInstance = axios.create({
    baseURL: `${api}`,
    headers: {
        Authorization: `Bearer ${persistedToken}`,
    }
});

axiosInstance.interceptors.request.use(
    (response) => response,
    async(error) => {
        const originalRequest = error.config;
        if(error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem('refreshToken');
            try {
                const response = axios.post(`${api}/refresh`, {refreshToken});
                const {token , refreshToken : newRefreshToken} = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('refreshToken', newRefreshToken);
                originalRequest.headers['Authorization'] = `Bearer ${token}`;
                return axiosInstance(originalRequest);
            } catch (error) {
                console.log("Refresh token expired. Redirect to login.");
            }
        }
        return Promise.reject(error);
    }
)