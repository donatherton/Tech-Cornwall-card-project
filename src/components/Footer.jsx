
export default function Footer() {

  function convertToImage(){    
    var element = document.getElementsByTagName("main")[0];console.log(element);
    domtoimage
      .toPng(element)
      .then(function (URL) {
        var newImg = new Image();
        newImg.src = URL;
        document.getElementById('ShowImage').appendChild(newImg);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return(
    <footer>
      <div id="ShowImage"></div>
      <button onClick={convertToImage}>Convert to image</button>
    </footer>
  );
}
