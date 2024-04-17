import { useEffect, useState } from 'react';
import {token} from '../config'


const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` }, // Replace with secure token retrieval
        });

        //const result = await res.json();

        if (!res.ok) {
          throw new Error(res.message);
        }

        setData(res.data); // Assuming data is nested within "data" property
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchData();
    }, [url]
  ); // Adjust dependency array

  return { data, loading, error };
};

export default useFetchData;