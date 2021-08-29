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
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useWindowSize } from 'react-use';
import { theme } from 'theme/theme';
import { fadeInUp, fadeTransition, stagger } from 'components/image/image.animation';

const TYPES = ['overview', 'structure', 'surface'];

const Description = ({ name, text, image }: IDescriptionProps) => {
  const { asPath } = useRouter();
  const { width } = useWindowSize();

  return (
    <Container>
      <Images image={image} name={name} />
      <Content>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={name}
            animate="animate"
            initial="initial"
            exit="exit"
            transition={stagger}
          >
            <Title as={motion.h1} variants={fadeInUp} transition={fadeTransition}>
              {name}
            </Title>
            <motion.div>
              <Paragraph as={motion.p} variants={fadeInUp} transition={fadeTransition}>
                {text.content}
              </Paragraph>
              <Wikipedia as={motion.p} variants={fadeInUp} transition={fadeTransition}>
                Source :&nbsp;
                <a href={text.source} rel="noreferrer">
                  Wikipedia
                </a>
              </Wikipedia>
            </motion.div>
          </motion.div>
        </AnimatePresence>
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
