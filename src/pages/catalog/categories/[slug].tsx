import { useRouter } from 'next/router';
import { Container } from '~/components/Container';
import Heading from '~/components/Heading';

interface IProduct {
  id: string;
  title: string;
}

interface CategoryProps {
  products: IProduct[];
}

export default function Category() {
  const router = useRouter();

  return (
    <div>
      <Container>
        <Heading>{router.query.slug}</Heading>
      </Container>
    </div>
  );
}
