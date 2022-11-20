import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState();

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
      <div className="search">
        <input
          value={search}
          type="search"
          placeholder="Search Character"
          autoComplete="on"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <div className="container">
        {data.results.map((results, index) => {
          return (
            <Link
              className="personnages-card"
              key={results._id}
              to={`/comics/:charaterId${results._id}`}
            >
              <h2>{results.name}</h2>

              {results.thumbnail.path ===
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
                <img
                  src="https://img.phonandroid.com/2022/11/Marvel-EA.jpg"
                  alt="marvel-notFound"
                />
              ) : (
                <img
                  src={
                    results.thumbnail.path + "." + results.thumbnail.extension
                  }
                  alt="personnages"
                />
              )}

              {results.description && <p>{results.description}</p>}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
