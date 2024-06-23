import { createContext } from "react";

const serverBase = "https://react-homework-8-2-backend.onrender.com"

let opts = {
    catalog: 'data',
    method: "GET",
}
export const AuthContext = createContext({
    serverBase: serverBase,
    opts: opts,
})