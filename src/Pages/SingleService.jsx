import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleService = () => {
  const id = useParams();

  const [service, setService] = useState();

  useEffect(() => {
    fetch(`/service.json/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setService(data);
      });
  }, []);

  return <div></div>;
};

export default SingleService;
