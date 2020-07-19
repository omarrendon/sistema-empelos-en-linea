import React, {useState, useEffect} from 'react'
import axios from 'axios';

function useFetch(url, options) {
  const [response, setResponse] = useState({ data: null, loading: true, error: null});

  useEffect( () => {
    
    const fetchData = async () => {
      // setLoading(true);
      try {
        const res = await axios.get(url, options);
        console.log(res.data);
        setResponse({
          loading: false,
          error: null,
          data: res.data
        });

      } catch (error) {
        setResponse({
          loading: false,
          error,
          data: null
        });
      }
    };

    fetchData();
  }, []);


  return response;
}

export default useFetch
