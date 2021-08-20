import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Gallery, { RefType } from './components/Gallery';

import { Button } from './styles';

const images = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png'
  },
  {
    src: 'https://relay.dev/img/relay.svg',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
  }
];

function App() {
  const galleryRef = useRef<RefType>(null);

  const PreviousButton = () => (
    <Button onClick={() => galleryRef?.current?.goToIndex(-1)}>
      <p>{'<'}</p>
    </Button>
  )

  const NextButton = () => (
    <Button onClick={() => galleryRef?.current?.goToIndex(1)}>
      <p>{'>'}</p>
    </Button>
  )

  useEffect(() => console.log('ACTIVE IMAGE: ', galleryRef?.current?.activeImage), [galleryRef?.current?.activeImage])

  return (
    <div className="App">
      <h2>My current stack</h2>

      <Gallery ref={galleryRef} images={images} />
    </div>
  );
}

export default App;
