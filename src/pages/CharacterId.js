import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CharacterId = () => {
  const [data, setData] = useState();
  const [isloading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.MARVEL_API_KEY}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return <div>Carte personnages</div>;
};
export default CharacterId;
