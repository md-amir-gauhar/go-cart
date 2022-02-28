import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";

import { RiShoppingCartLine } from "react-icons/ri";
import { RiHomeHeartFill } from "react-icons/ri";
import { ImCart } from "react-icons/im";
import Products from "./Products";
import Cart from "./Cart";

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=League+Gothic:wdth@75&display=swap");
  display: grid;
  justify-content: center;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: "League Gothic", sans-serif;
  font-size: 1.5rem;
`;

const Icons = styled.div`
  font-size: 1.5rem;
  margin: 0 0.5rem;
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: black;
  }
`;

export default function App() {
  return (
    <Wrapper className="App">
      <Header>
        <TitleWrapper>
          <RiShoppingCartLine />
          Go Shopping
        </TitleWrapper>
        <LinksWrapper>
          <Link to="/">
            <Icons>
              <RiHomeHeartFill />
            </Icons>
          </Link>

          <Link to="/cart">
            <Icons>
              <ImCart />
            </Icons>
          </Link>
        </LinksWrapper>
      </Header>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Wrapper>
  );
}
