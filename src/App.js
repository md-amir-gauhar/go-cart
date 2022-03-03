import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import useShop from "./CartContext";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiHomeHeartFill } from "react-icons/ri";
import { ImCart } from "react-icons/im";
import Products from "./Products";
import Cart from "./Cart";

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=League+Gothic:wdth@75&display=swap");
  display: grid;
  justify-content: center;
  width: fit-content;
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #60c95d;
  border-radius: 100px;
  width: auto;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: "League Gothic", sans-serif;
  font-size: 1.5rem;
  width: max-content;
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  width: max-content;

  a {
    text-decoration: none;
    color: black;
  }
`;

const Icons = styled.div`
  font-size: 1.5rem;
  margin: 0 0.5rem;
  position: relative;
  display: flex;
`;

const CartItems = styled.span`
  position: absolute;
  top: -10px;
  right: -15px;
  font-size: 1rem;
  background-color: black;
  color: white;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  const { products } = useShop();
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
              <CartItems>{products.length && `${products.length}`}</CartItems>
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
