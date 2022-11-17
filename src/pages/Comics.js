import axios from "axios";
import { useEffect, useState } from "react";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/comics");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="container">
      {data.results.map((results, index) => {
        return (
          <div key={results._id} className="comics-container">
            <h2>{results.title}</h2>
            <img
              src={results.thumbnail.path + "." + results.thumbnail.extension}
              alt="comics"
            />
            {results.description && <p>{results.description}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Comics;
