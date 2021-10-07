import React from 'react';
import styled from 'styled-components';

interface ShopItemProps {
  name: string;
  price: number;
  onput: (name: string, price: number) => void;
}

const ShopItem = ({ name, price, onput }: ShopItemProps) => {
  return (
    <ShopsItem onClick={() => onput(name, price)}>
      <ShopsItemName>{name}</ShopsItemName>
      <div>{price}원</div>
    </ShopsItem>
  );
};

const ShopsItem = styled.div`
  background: white;
  border: 1px solid #495057;
  padding: 0.5rem;
  border-radius: 2px;
  cursor: pointer;
  & :hover {
    background: #495057;
    color: white;
  }
  margin-top: 1rem;
`;

const ShopsItemName = styled.h4`
  margin-top: 0;
  margin-bottom: 1rem;
`;

export default ShopItem;
