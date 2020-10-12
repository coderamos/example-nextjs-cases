import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Container } from '~/components/Container';
import Heading from '~/components/Heading';
import Info from '~/components/Info';

import * as s from '~/styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }: HomeProps) {
  const router = useRouter();
  const page = router.pathname;

  return (
    <s.Container>
      <Container>
        <Info
          page={page}
          apiLink="/recommended"
          method="getServerSideProps"
          experienceType="Server Side Rendering"
        />

        <s.ProductsWrapper>
          <Heading color="primary">Products</Heading>
          <s.ProductsList>
            {recommendedProducts.map(product => {
              return <s.Product key={product.id}>{product.title}</s.Product>;
            })}
          </s.ProductsList>
        </s.ProductsWrapper>
      </Container>
    </s.Container>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/recommended');
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  };
};
