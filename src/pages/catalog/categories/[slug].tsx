import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Container } from '~/components/Container';
import Info from '~/components/Info';
import Heading from '~/components/Heading';

import * as s from '~/styles/pages/Category';

interface IProduct {
  id: string;
  title: string;
}

interface CategoryProps {
  products: IProduct[];
}

export default function Category({ products }: CategoryProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <s.LoadingMessage>loading...</s.LoadingMessage>;
  }

  const page = router.pathname;

  return (
    <s.Container>
      <Container>
        <Info
          page={page}
          apiLink="/categories"
          method="getStaticPaths, getStaticProps"
          experienceType="Static Site Generation"
        />
        <Heading color="primary">{router.query.slug}</Heading>

        <s.ProductsWrapper>
          <s.ProductsList>
            {products.map(product => (
              <s.Product key={product.id}>{product.title}</s.Product>
            ))}
          </s.ProductsList>
        </s.ProductsWrapper>
      </Container>
    </s.Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:3333/categories');
  const categories = await response.json();

  const paths = categories.map(({ id }: IProduct) => {
    return {
      params: {
        slug: id
      }
    };
  });

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<CategoryProps> = async context => {
  const slug = context.params?.slug;
  const response = await fetch(
    `http://localhost:3333/products?category_id=${slug}`
  );
  const products = await response.json();

  return {
    props: {
      products
    },
    revalidate: 10
  };
};
