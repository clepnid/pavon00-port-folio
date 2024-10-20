import React, { useEffect } from 'react';
import './styles/bienvenido.css';
import { useClippy, ClippyProvider } from '@react95/clippy';
import { Button } from 'react95';

const MyComponent = () => {
  const { clippy } = useClippy();

  const accion = () => {
    if (clippy) {
      clippy.pause();
      clippy.moveTo(200,200);
      clippy.play();
      clippy.speak('Hello World');
      clippy.delay(2000);
      clippy.closeBalloon();
      clippy.speak('Hello Worldddd');
      
    }
  };

  return <Button onClick={() => accion()}>Hello Clippy!</Button>;
};

const Bienvenido = () => {
  return (
    <div className={'bienvenido_container'}>
      <ClippyProvider>
        <MyComponent />
      </ClippyProvider>
    </div>
  );
};

export default Bienvenido;
