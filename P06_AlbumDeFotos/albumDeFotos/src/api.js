import axios from "axios";

export default axios;

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.params = {
    client_id: import.meta.env.VITE_UNSPLASH_API,
    lang: "pt"
};
