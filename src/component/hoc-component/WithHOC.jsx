import React, { useState, useEffect } from "react";
import axios from "axios";

const WithHOC = (WrappedComponent, entity) => {
  const FetchData = () => {
    // console.log("1");

    const [data, setData] = useState();
    useEffect(() => {
      let unsubscribed = false;
      axios
        .get(`https://jsonplaceholder.typicode.com/${entity}`)
        .then((res) => {
          if (!unsubscribed) {
            setData(res.data);
            // console.log(res.data);
          }
        })
        .catch((err) => {
          console.log(err.msg);
        });

      //cleaning
      return () => {
        unsubscribed = true;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // return <>{data?.length > 0 && <WrappedComponent data={data} />}</>;
    return <>{data && <WrappedComponent data={data} />}</>;
  };

  return FetchData;
};

export default WithHOC;
