import { useRouter } from 'next/router';
import { Container } from '~/components/Container';
import Heading from '~/components/Heading';

export default function Product() {
  const router = useRouter();

  return (
    <div>
      <Container>
        <Heading>{router.query.slug}</Heading>
      </Container>
    </div>
  );
}
