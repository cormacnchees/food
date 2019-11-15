import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer bBWeUccV8x0BsPSMi8ISwSHM4XX0ZIs3I3P9j6CGzJuLmbhW4NVafKo3KNFChDWlx9eLJOmiH3l8CnCPnd10_MBsk06zriCwNJeGdh5XJl9Bc7SqwB0ntNSR1ObOXXYx"
  }
});
