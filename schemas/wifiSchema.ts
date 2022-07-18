import Joi from "joi";
import { CreateWifiData } from "../services/wifiService.js";

type insertWifiData = Omit<CreateWifiData, 'userId'>

export const wifiSchema = Joi.object<insertWifiData>({
    
    title: Joi.string().required(),
    ssid: Joi.string().required(),
    password: Joi.string().required()

});
