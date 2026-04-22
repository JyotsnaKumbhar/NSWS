
import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setData(res);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}