import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

import "@splidejs/splide/dist/css/splide.min.css";

function Random() {
  const [random, setRandon] = useState([]);

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async () => {
    const check = localStorage.getItem("random");
    if (check) {
      setRandon(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20`
      );

      const data = await api.json();
      localStorage.setItem("random", JSON.stringify(data.recipes));
      setRandon(data.recipes);
    }
  };

  return (
    <div>
      <h3>Destacado</h3>
      <Grid>
        {random.map((item) => {
          return (
            <Card key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Random;
