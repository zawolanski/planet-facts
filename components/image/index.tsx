import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { ImgContainer, ImgWrapper, Surface } from './image.styled';
import { IImageProps } from '../description/description.types';
import { sizes } from './image.sizes';
import { AnimatePresence, motion } from 'framer-motion';
const Images = ({ image, name }: IImageProps) => {
  const { query } = useRouter();

  return (
    <ImgContainer>
      <AnimatePresence exitBeforeEnter>
        <ImgWrapper
          $sizes={sizes}
          $name={name}
          key={name}
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.1 } }}
        >
          <Image
            layout="fill"
            src={query.type === 'structure' ? image.structure.url : image.overview.url}
            alt=""
            unoptimized
          />
          {query.type === 'surface' ? (
            <Surface
              as={motion.div}
              initial={{ y: 50, x: '-50%', opacity: 0 }}
              animate={{ y: 0, x: '-50%', opacity: 1 }}
              transition={{
                y: { duration: 0.3, ease: 'easeInOut' },
                opacity: { duration: 0.3, ease: 'easeInOut' },
              }}
            >
              <Image
                layout="fill"
                src={image.surface.url}
                alt={`The surface of ${name}`}
                loading="eager"
              />
            </Surface>
          ) : null}
        </ImgWrapper>
      </AnimatePresence>
    </ImgContainer>
  );
};

export default Images;
