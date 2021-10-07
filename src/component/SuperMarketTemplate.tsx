import React from 'react';
import styled from 'styled-components';

interface SuperMarketTemplateProps {
  item: JSX.Element;
  basket: JSX.Element;
}

const SuperMarketTemplate = ({ item, basket }: SuperMarketTemplateProps) => {
  return (
    <Template>
      <ItemWrapper>
        <TemplateTitle>상품</TemplateTitle>
        {item}
      </ItemWrapper>
      <BasketWrapper>
        <TemplateTitle>장바구니</TemplateTitle>
        {basket}
      </BasketWrapper>
    </Template>
  );
};

const Template = styled.div`
  width: 769px;
  display: flex;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
`;

const TemplateTitle = styled.h2`
  margin-top: 0;
`;

const BasketWrapper = styled.div`
  padding: 1rem;
  flex: 1;
`;

const ItemWrapper = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  flex: 1;
`;

export default SuperMarketTemplate;
