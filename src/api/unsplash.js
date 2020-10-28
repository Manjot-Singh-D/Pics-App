import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID kwS-F0QbCui3uBlihVqNlVqtGNWgXb-xNqKiIIzxLNQ",
  },
});
