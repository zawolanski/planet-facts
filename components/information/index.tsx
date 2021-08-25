import { Card, CardTitle, CardValue, Container } from './information.styled';
import { IInformationProps } from './information.types';

const Information = ({ radius, revolution, rotation, temperature }: IInformationProps) => {
  return (
    <Container>
      <Card>
        <CardTitle>rotation time</CardTitle>
        <CardValue>{rotation}</CardValue>
      </Card>
      <Card>
        <CardTitle>revolution time</CardTitle>
        <CardValue>{revolution}</CardValue>
      </Card>
      <Card>
        <CardTitle>radius time</CardTitle>
        <CardValue>{radius}</CardValue>
      </Card>
      <Card>
        <CardTitle>average temp. time</CardTitle>
        <CardValue>{temperature}</CardValue>
      </Card>
    </Container>
  );
};

export default Information;
