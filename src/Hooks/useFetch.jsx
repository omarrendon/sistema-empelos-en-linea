import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url, options) {
  const [response, setResponse] = useState({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(url, options);
      setResponse({
        loading: false,
        error: null,
        data: res.data.empresarios
      });
    } catch (error) {
      setResponse({
        loading: false,
        error,
        data: null
      });
    }
  };
  
  return response;
}

export default useFetch;
