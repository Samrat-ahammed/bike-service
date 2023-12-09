import { useEffect, useState } from "react";

const useService = () => {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setService(data), setLoading(false);
      });
  }, []);
  return [service, loading];
};

export default useService;
