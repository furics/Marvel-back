import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Comicsharacter = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams;

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
          <>
            <div>
              <img
                src={results.thumbnail.path + "." + results.thumbnail.extension}
                alt="comics"
              />
            </div>
            <div>
              {results.comics.map((comics, index) => {
                return (
                  <div>
                    <h2>{comics.title}</h2>
                    <img
                      src={
                        comics.thumbnail.path + "." + comics.thumbnail.extension
                      }
                      alt=""
                    />
                    <p>{comics.description}</p>
                  </div>
                );
              })}
            </div>
            <div>
              <p>{results.name}</p>
              <p>{results.description}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Comicsharacter;
