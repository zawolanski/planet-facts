import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { ImgContainer, ImgWrapper, Surface } from './image.styled';
import { IImageProps } from '../description/description.types';
const Images = ({ image, name }: IImageProps) => {
  const { query } = useRouter();

  return (
    <ImgContainer>
      <ImgWrapper>
        <Image
          layout="fill"
          src={query.type === 'structure' ? image.structure.url : image.overview.url}
          alt=""
          className="img"
        />
        {query.type === 'surface' ? (
          <Surface>
            <Image layout="fill" src={image.surface.url} alt={`The surface of ${name}`} />
          </Surface>
        ) : null}
      </ImgWrapper>
    </ImgContainer>
  );
};

export default Images;
