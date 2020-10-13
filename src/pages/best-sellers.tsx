import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Container } from '~/components/Container';
import Info from '~/components/Info';
import Heading from '~/components/Heading';

import * as s from '~/styles/pages/BestSellers';

interface IProduct {
  id: string;
  title: string;
}

interface BestSellersProps {
  products: IProduct[];
}

export default function BestSellers({ products }: BestSellersProps) {
  const router = useRouter();
  const page = router.pathname;

  return (
    <s.Container>
      <Container>
        <Info
          page={page}
          apiLink="/products"
          method="getStaticProps"
          experienceType="Static Site Generation"
        />
        <Heading color="primary">Best Sellers</Heading>

        <s.ProductsWrapper>
          <s.ProductsList>
            {products.map(product => {
              return <s.Product key={product.id}>{product.title}</s.Product>;
            })}
          </s.ProductsList>
        </s.ProductsWrapper>
      </Container>
    </s.Container>
  );
}

export const getStaticProps: GetStaticProps<BestSellersProps> = async () => {
  const response = await fetch('http://localhost:3333/products');
  const products = await response.json();

  return {
    props: {
      products
    },
    revalidate: 10
  };
};
