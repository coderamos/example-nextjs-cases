import * as s from './styles';

type InfoApiProps = {
  apiLink: string;
};

const InfoApi = ({ apiLink }: InfoApiProps) => (
  <s.Container>
    <s.Title>
      API: <s.ApiLink>{apiLink}</s.ApiLink>
    </s.Title>
  </s.Container>
);

export default InfoApi;
