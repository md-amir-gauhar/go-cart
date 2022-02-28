import styled from "styled-components";
import { IoIosCart } from "react-icons/io";

const Wrapper = styled.div`
  display: grid;
  align-items: flex-end;
  width: 240px;
  height: 340px;
  border-radius: 20px;
  box-shadow: 0px 20px 40px rgba(52, 53, 99, 0.2),
    0px 1px 3px rgba(0, 0, 0, 0.05);
  background: ${(props) =>
    props.background && `url(${props.background}) center no-repeat`};
  background-size: 300px;
  overflow: hidden;
  position: relative;
`;

const Cart = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  background: #60c95d;
  color: #fff;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;

  :hover {
    transform: scale(1.2);
    transition: 1s;
  }
`;

const TextContainer = styled.div`
  display: grid;
  gap: 5px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  width: 100%;
  padding: 10px 20px;
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  margin: 0;
  font-weight: bold;
  color: #ffffff;
  margin: 0px;
`;

const Subtitle = styled.p`
  font-weight: normal;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0px;
`;

const ProductCard = ({ name, imageUrl, price }) => {
  return (
    <Wrapper background={imageUrl}>
      <Cart>
        <IoIosCart />
      </Cart>
      <TextContainer>
        <Title>{name}</Title>
        <Subtitle>{price}.00$</Subtitle>
      </TextContainer>
    </Wrapper>
  );
};

export default ProductCard;
