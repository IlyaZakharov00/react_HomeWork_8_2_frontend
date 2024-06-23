import { useState, useEffect } from 'react'

export type TOpts = {
  catalog?: string;
  method?: string
}


export const useJsonFetch = (url: string, opts: TOpts) => {
  const { catalog, method } = opts;
  const server = `${url + "/" + catalog}`;

  const [data, setData] = useState<any>(undefined)
  const [isLoading, setLoading] = useState<boolean | undefined>(undefined)
  const [error, setError] = useState<boolean | undefined | string>(undefined)

  useEffect(() => {
    const fetchToUrl = async () => {

      setLoading(true)
      const response = await fetch(server, {
        method,
      }).then((response_) => {
        setLoading(false)
        try {
          response_.json().then((dataFromServer) => {
            setError(false);
            setData(dataFromServer)
          })
        } catch (error) {
          console.log("Ошибка парсинга ", error)
          setError("Ошибка парсинга")
        }
      }
      ).catch((error) => {
        console.log('Ошибка сети :( ', error)
        setError("Ошибка сети")
        console.log("Данные удалось получить ", response)
      })
    }
    fetchToUrl();

  }, [])
  return ([data, isLoading, error])
}
