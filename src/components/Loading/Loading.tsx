import { useContext } from "react";
import { useJsonFetch } from "../../hooks/useJsonFetch";
import { AuthContext } from "../context/MyContext";

export const Loading = () => {
    const { opts, serverBase } = useContext(AuthContext)
    opts.catalog = 'loading'
    const [data, loading, error] = useJsonFetch(serverBase, opts)
    if (data !== undefined && loading !== undefined && error !== undefined) console.log(data, loading, error, ' data')
    return (
        <div>Loading</div>
    )
}
