import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("Instruciones");

  const fetchDetails = async () => {
    const check = localStorage.getItem(params.name);
    if (check) {
      setDetails(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const detailData = await data.json();
      localStorage.setItem(params.name, JSON.stringify(detailData));

      setDetails(detailData);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "Instruciones" ? "active" : ""}
          onClick={() => setActiveTab("Instruciones")}
        >
          Instruciones
        </Button>
        <Button
          className={activeTab === "Ingredientes" ? "active" : ""}
          onClick={() => setActiveTab("Ingredientes")}
        >
          Ingredientes
        </Button>
        {activeTab === "Instruciones" && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CustomLabel
              dangerouslySetInnerHTML={{ __html: details.summary }}
            ></CustomLabel>
            <CustomLabel
              dangerouslySetInnerHTML={{ __html: details.instructions }}
            ></CustomLabel>
          </motion.div>
        )}
        {activeTab === "Ingredientes" && (
          <motion.ul
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {details.extendedIngredients.map((x) => (
              <li key={x.id + "v"}>{x.original}</li>
            ))}
          </motion.ul>
        )}
      </Info>
    </DetailWrapper>
  );
}
const CustomLabel = styled.p`
  margin-bottom: 2rem;
  margin-top: 2rem;
  color: #313131;
  font-size: 1.1rem;
  line-height: 1.2rem;
  letter-spacing: 0.1rem;
`;
const DetailWrapper = styled(motion.div)`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 1.2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weicht: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
