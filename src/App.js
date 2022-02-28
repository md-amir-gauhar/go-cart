import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";

import { RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import Products from "./Products";
import Cart from "./Cart";

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
  display: grid;
  justify-content: center;
  margin: 40px;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }
  display: flex;
  align-items: center;
  column-gap: 1rem;
  font-family: "Kaushan Script", cursive;
  align-self: flex-start;
`;

const Icons = styled.div`
  font-size: 2rem;

  :hover {
    font-size: 3rem;
    cursor: pointer;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 2rem;

  a {
    text-decoration: none;
    color: black;
  }
`;

export default function App() {
  return (
    <Wrapper className="App">
      <TitleWrapper>
        <Icons>
          <RiShoppingCartLine />
        </Icons>
        <h1>Go Cart</h1>
      </TitleWrapper>
      <LinksWrapper>
        <Link to="/">
          <Icons>
            <AiOutlineHome />
          </Icons>
        </Link>

        <Link to="/cart">
          <Icons>
            <GiShoppingCart />
          </Icons>
        </Link>
      </LinksWrapper>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Wrapper>
  );
}
