import { HOST_EMULATOR } from "@env";
import axios  from "axios";



const ApiDelivery = axios.create({
    baseURL: HOST_EMULATOR,
    headers: {
        "Content-Type": "application/json"
    }
});

export {ApiDelivery}