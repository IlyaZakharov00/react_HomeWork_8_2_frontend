import { useJsonFetch } from "../../hooks/useJsonFetch"
import { AuthContext } from "../context/MyContext"
import { memo, useContext } from "react"

export const Data = memo(() => {
    const { opts, serverBase } = useContext(AuthContext)
    opts.catalog = 'data';
    const [data, loading, error] = useJsonFetch(serverBase, opts)


    if (data !== undefined && loading !== undefined && error !== undefined) console.log(data, loading, error)

    return (
        <>
            <div>Data</div>
        </>
    )
})
