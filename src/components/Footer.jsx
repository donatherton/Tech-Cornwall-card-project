import GetPhoto from './PhotoCapture';

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
      {GetPhoto()}
      <canvas id="canvas"></canvas>
      <button onClick={convertToImage}>Convert to image</button>
    </footer>
  );
}
