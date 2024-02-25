import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fea16347c44f4f00b3c059bea91fc70b'
    }
})