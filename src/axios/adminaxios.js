import axios from "axios";

const admin = axios.create({
    baseURL: 'https://pythonmaster42.pythonanywhere.com/'
}
)

export default admin;   
