import { useEffect, useState } from 'react';

import { Container } from '~/components/Container';
import Heading from '~/components/Heading';
import InfoApi from '~/components/InfoApi';

import * as s from '~/styles/pages/Home';

interface ProductsProps {
  id: string;
  title: string;
}

export default function Home() {
  const [recommendedProducts, setRecommendedProducts] = useState<
    ProductsProps[]
  >([]);

  useEffect(() => {
    fetch('http://localhost:3333/recommended').then(response => {
      response.json().then(data => {
        setRecommendedProducts(data);
      });
    });
  }, []);
  return (
    <s.Container>
      <Container>
        <s.ProductsWrapper>
          <Heading color="primary">Products</Heading>
          <s.ProductsList>
            {recommendedProducts.map(product => {
              return <s.Product key={product.id}>{product.title}</s.Product>;
            })}
          </s.ProductsList>
          <InfoApi apiLink="/recommended" />
        </s.ProductsWrapper>
      </Container>
    </s.Container>
  );
}
