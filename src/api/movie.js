import axios from 'axios';
import * as consts from '../constants/Constants';


export default axios.create({
   baseURL: consts.PROXY_URL
});