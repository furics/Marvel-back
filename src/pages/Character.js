import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CharacterId = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-marvel-api.herokuapp.com/character/${id}?apiKey=${process.env.MARVEL_API_KEY}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="container">
      {data.results.map((results, index) => {
        return (
          <div className="personnages-card" key={results._id}>
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
  );
};
export default CharacterId;
