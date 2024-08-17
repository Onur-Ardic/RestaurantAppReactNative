import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer mOIj66DPZcmEj3HuZjOz0urF7pBytVoWXW565UrJAGcIDdn-knKkOrPe6dVNEgfOtZ6gonV-hPjaJCyiiJMbXdCpkzmGM7WEIvo0_2r3c6ePQayMGp4WZDecEIbAZnYx`,
  },
})
