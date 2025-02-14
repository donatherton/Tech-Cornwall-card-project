import GetPhoto from './PhotoCapture';
import domtoimage from '../utils/dom-to-img/index';
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
        const imgDiv = document.querySelector('#show-image');
        imgDiv.appendChild(newImg);
        imgDiv.style.visibility = 'visible';
        imgDiv.style.opacity = 1;
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
      <div ref={ref} id="show-image"><p>Image (right-click or long press for options):</p></div>
       { <GetPhoto /> }
      <canvas id="canvas"></canvas>
      <form>
        <input className="qr-input" id="qr" name="qr" required type="url" placeholder="https://techcornwall.co.uk" />
        <button type="submit" onClick={(e) => qrGenerate(e)}>Generate QR</button>
      </form>
      <button onClick={convertToImage}>Convert to image</button>
    </footer>
  );
}
