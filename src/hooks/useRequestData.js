import { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0.`).then((res) => {
      const pokemonsDetails = res.data.results.map(({ url }) =>
        axios.get(url).then((res) => {
          return res.data;
        })
      );
      Promise.all(pokemonsDetails).then((res) => setData(res));
    });
  }, []);

  return data;
};
