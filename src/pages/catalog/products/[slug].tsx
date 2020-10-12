import { useRouter } from 'next/router';
import { Container } from '~/components/Container';
import Heading from '~/components/Heading';

import * as s from './styles';

export default function Product() {
  const router = useRouter();

  return (
    <s.Container>
      <Container>
        <Heading>{router.query.slug}</Heading>
      </Container>
    </s.Container>
  );
}
