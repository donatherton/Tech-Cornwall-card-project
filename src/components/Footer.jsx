import GetPhoto from './PhotoCapture';
import domtoimage from '../utils/dom-to-img/index';

export default function Footer() {

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

  return(
    <footer>
      <div id="show-image"></div>      
        <GetPhoto />
      <canvas id="canvas"></canvas>
      <button onClick={convertToImage}>Convert to image</button>
    </footer>
  );
}
