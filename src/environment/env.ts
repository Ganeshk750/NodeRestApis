import { ProdEnvironmet } from "./prod.env";
import { DevEnvironmet } from "./dev.env";
import { Interface } from "readline";


export interface Environment {
    db_url: string;
}



export function getEnvironmentVariable() {

    if(process.env.NODE_ENV === 'production'){
        return ProdEnvironmet;
    }
      return DevEnvironmet;
}