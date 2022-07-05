import {
  useState,
  useEffect
} from 'react';

function useJsonFetch(url, opts) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  const fullUrl = url + opts;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response = await fetch(fullUrl);
        if (!response.ok) {
          setError(response.statusText);
        }
        let result = await response.json();
        setData(result);
      } catch(e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return [ data, loading, error ];
}

export default useJsonFetch;
