import * as s from './styles';

type InfoProps = {
  page: string;
  apiLink: string;
  experienceType: string;
  method: string;
};

const Info = ({ page, apiLink, experienceType, method }: InfoProps) => (
  <s.Container>
    <s.Title>
      <s.InfoItem>
        <s.Description>PAGE:</s.Description>
        <s.Value>{page}</s.Value>
      </s.InfoItem>
      <s.InfoItem>
        <s.Description>API FETCH:</s.Description>
        <s.Value>{apiLink}</s.Value>
      </s.InfoItem>
      <s.InfoItem>
        <s.Description>METHOD USED:</s.Description>
        <s.Value>{method}</s.Value>
      </s.InfoItem>
      <s.InfoItem>
        <s.Description>EXPERIENCE TYPE:</s.Description>
        <s.Value>{experienceType}</s.Value>
      </s.InfoItem>
    </s.Title>
  </s.Container>
);

export default Info;
