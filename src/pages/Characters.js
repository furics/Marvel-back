import axios from "axios";
import { useEffect, useState } from "react";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/characters");
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
    <>
      <div className="container">
        {data.results.map((results, index) => {
          return (
            <div key={results._id} className="parsonnages-card">
              <h2>{results.name}</h2>
              <img
                src={results.thumbnail.path + "." + results.thumbnail.extension}
                alt="personnages"
              />
              {results.description && <p>{results.description}</p>}
            </div>
          );
        })}
      </div>
      <div className="search">
        <input type="search" placeholder="Search Characters" />
      </div>
    </>
  );
};

export default Characters;
