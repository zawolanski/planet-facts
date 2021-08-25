import { Card, CardTitle, CardValue, Container } from './information.styled';
import { IInformationProps } from './information.types';

const Information = ({ radius, revolution, rotation, temperature }: IInformationProps) => {
  return (
    <Container>
      <Card>
        <CardTitle>rotation time</CardTitle>
        <CardValue>{rotation} days</CardValue>
      </Card>
      <Card>
        <CardTitle>revolution time</CardTitle>
        <CardValue>
          {revolution > 1000 ? `${(revolution / 365).toFixed(2)} years` : `${revolution} days`}
        </CardValue>
      </Card>
      <Card>
        <CardTitle>radius</CardTitle>
        <CardValue>{radius} km</CardValue>
      </Card>
      <Card>
        <CardTitle>average temp.</CardTitle>
        <CardValue>{temperature} °C</CardValue>
      </Card>
    </Container>
  );
};

export default Information;
