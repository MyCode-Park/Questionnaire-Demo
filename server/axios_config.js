import axios from "axios";
import {getSessionId} from "./cookies";

const apiInstance = axios.create({
    baseURL: '',
});

apiInstance.defaults.headers.common['JSESSIONID'] = getSessionId('JSESSIONID')

export default apiInstance;