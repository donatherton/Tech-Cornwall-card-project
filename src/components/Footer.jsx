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
        newImg.style.scrollMarginTop = '150px';
        const imgDiv = document.querySelector('#show-image');
        imgDiv.appendChild(newImg);
        imgDiv.style.visibility = 'visible';
        imgDiv.style.opacity = 1;
        // setTimeout necessary as height of div changing
        setTimeout(() => {
          newImg.scrollIntoView({behavior: 'smooth', block: 'center'})
        },100);
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
       { <GetPhoto /> }
      <canvas id="canvas"></canvas>
      <form>
        <label>Enter a website / social media URL for QR code:<input className="qr-input" id="qr" name="qr" required type="url" placeholder="https://techcornwall.co.uk" /></label>
        <button type="submit" onClick={(e) => qrGenerate(e)}>Generate QR</button>
      </form>
      <button onClick={convertToImage}>Convert to image</button>
      <div ref={ref} id="show-image"><p>Image (right-click or long press for options):</p></div>
    </footer>
  );
}
