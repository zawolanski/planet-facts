import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import {
  Buttons,
  Container,
  Paragraph,
  Title,
  Wikipedia,
  Button,
  Content,
  Underline,
  ButtonWrapper,
} from './description.styled';
import { IDescriptionProps } from './description.types';
import Images from 'components/image';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { useWindowSize } from 'react-use';
import { theme } from 'styles/theme/theme';

const TYPES = ['overview', 'structure', 'surface'];

const Description = ({ name, text, image }: IDescriptionProps) => {
  const { asPath } = useRouter();
  const { width } = useWindowSize();

  return (
    <Container>
      <Images image={image} name={name} />
      <Content>
        <div>
          <Title>{name}</Title>
          <div>
            <Paragraph>{text.content}</Paragraph>
            <Wikipedia>
              Source :&nbsp;
              <a href={text.source} rel="noreferrer">
                Wikipedia
              </a>
            </Wikipedia>
          </div>
        </div>
        <Buttons>
          <AnimateSharedLayout>
            {TYPES.map((type) => (
              <ButtonWrapper key={type}>
                <Link href={`/${name}/${type}`} passHref>
                  <Button as={motion.a} name={name} isActive={asPath === `/${name}/${type}`}>
                    {width >= theme.breakpoint.tablet && type === 'structure' && 'internal '}
                    {type}
                    {width >= theme.breakpoint.tablet && type === 'surface' && ' geology'}
                  </Button>
                </Link>
                {asPath === `/${name}/${type}` && (
                  <Underline name={name} initial={false} layoutId="underline" />
                )}
              </ButtonWrapper>
            ))}
          </AnimateSharedLayout>
        </Buttons>
      </Content>
    </Container>
  );
};

export default Description;
