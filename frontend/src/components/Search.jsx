import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHanddler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
    setInput('');
  };

  return (
    <Container>
      <FormStyle onSubmit={submitHanddler}>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="..."
        />
      </FormStyle>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const FormStyle = styled.form`
  margin: 0rem 0rem;
  position: relative;
  width: 70%;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 0.7rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
