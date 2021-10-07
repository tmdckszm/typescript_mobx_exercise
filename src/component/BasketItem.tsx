import React from 'react';
import styled from 'styled-components';

interface BasketItemProps {
  name: string;
  price: number;
  count: number;
  onTake: (name: string) => void;
}

const BasketItem = ({ name, price, count, onTake }: BasketItemProps) => {
  return (
    <BasketItems>
      <BasketItemsName>{name}</BasketItemsName>
      <BasketItemPrice>{price}원</BasketItemPrice>
      <BasketItemCount>{count}</BasketItemCount>
      <BasketItemReturn onClick={() => onTake(name)}>갖다놓기</BasketItemReturn>
    </BasketItems>
  );
};

const BasketItems = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
`;

const BasketItemsName = styled.div`
  flex: 2;
`;

const BasketItemPrice = styled.div`
  flex: 1;
`;

const BasketItemCount = styled.div`
  flex: 1;
`;

const BasketItemReturn = styled.div`
  margin-left: auto;
  color: #f06595;
  cursor: pointer;
  & :hover {
    text-decoration: underline;
  }
`;

export default BasketItem;
