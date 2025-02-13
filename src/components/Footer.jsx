
import domtoimage from '../utils/dom-to-img/index';
import PhotoModal from './PhotoModal';
import { useRef } from 'react';

export default function Footer({setUrl}) {
  const ref = useRef(null);

  function convertToImage(){    
    var element = document.querySelector('main');
    domtoimage
      .toJpeg(element)
      .then(function (URL) {
        var newImg = new Image();
        newImg.src = URL;
        document.querySelector('#show-image').appendChild(newImg);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function qrGenerate(e) {
    e.preventDefault();
    const newUrl = document.querySelector('#qr').value;
    setUrl(newUrl);
  }

  return(
    <footer>
      <div ref={ref} id="show-image"></div>
      <PhotoModal props={ref} />
      {/* <GetPhoto /> */}
      <canvas id="canvas"></canvas>
      <form>
        <input className="qr-input" id="qr" name="qr" required type="url" placeholder="https://techcornwall.co.uk" />
        <button type="submit" onClick={(e) => qrGenerate(e)}>Generate QR</button>
      </form>
      <button onClick={convertToImage}>Convert to image</button>
    </footer>
  );
}
