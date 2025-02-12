import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';


export default function App() {
  const [ url, setUrl ] = useState('https://techcornwall.co.uk');
  return(
    <>
      <Main url={url} />
      <Footer setUrl={setUrl}  />
    </>
  );
}

