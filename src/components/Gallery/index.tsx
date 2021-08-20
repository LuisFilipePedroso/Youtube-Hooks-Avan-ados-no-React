import { useState, forwardRef, useImperativeHandle } from 'react';
import { useMemo } from 'react';
import { useCallback } from 'react';

import { Container, ImageContainer, Image, ControlButton } from './styles';

type ImageType = {
  src: string;
}

type Props = {
  images: ImageType[];
  previousButton?: JSX.Element;
  nextButton?: JSX.Element;
}

export type RefType = {
  goToIndex: (index: 1 | -1) => void;
  activeImage: ImageType;
}

const Gallery = forwardRef<RefType, Props>(({ images, previousButton: PreviousButton, nextButton: NextButton }, ref) => {
  const [index, setIndex] = useState(0);

  const goToIndex = useCallback((pageRef: 1 | -1) => {
    const newIndex = index + pageRef;

    if (newIndex < 0) {
      return;
    }

    if (newIndex > images.length) {
      return;
    }

    setIndex(newIndex);
  }, [images.length, index]);

  const hasNextImage = useMemo(() => index + 1 < images.length, [images.length, index]);

  const Previous = () => {
    if (!PreviousButton) {
      return <ControlButton onClick={() => goToIndex(-1)}>{'<'}</ControlButton>
    }

    return PreviousButton;
  }

  const Next = () => {
    if (!NextButton) {
      return <ControlButton onClick={() => goToIndex(1)}>{'>'}</ControlButton>
    }

    return NextButton;
  }

  useImperativeHandle(ref, () => ({
    goToIndex,
    activeImage: images[index]
  }))

  return (
    <Container>
      {index > 0 && <Previous />}
      <ImageContainer>
        <Image src={images[index].src} />
      </ImageContainer>
      {hasNextImage && (
        <Next />
      )}
    </Container>
  )
})

export default Gallery;