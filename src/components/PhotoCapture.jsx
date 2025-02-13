const width = 400;
let height = 0;

let streaming = false;

let video = null;
let canvas = null;
let photo = null;
let startButton = null;

export default function GetPhoto({setIsOpen}) {

  function startup() {
    video = document.querySelector('#video');
    canvas = document.querySelector('#canvas');
    photo = document.querySelector('#photo');
    startButton = document.querySelector('#start-button');
    document.querySelector('#photo-button').style.display = 'none';
    startButton.style.display = 'block';

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        alert(`An error occurred: ${err}`);
      });

    video.addEventListener(
      "canplay",
      (e) => {
        if (!streaming) {
          height = video.videoHeight / (video.videoWidth / width);

          if (isNaN(height)) {
            height = width / (4 / 3);
          }

          video.setAttribute("width", width);
          video.setAttribute("height", height);
          canvas.setAttribute("width", width);
          canvas.setAttribute("height", height);
          streaming = true;
        }
      },
      false,
    );

    startButton.addEventListener(
      "click",
      (e) => {
        takePicture();
        setIsOpen(false);
        document.querySelector('#profile-pic').scrollIntoView({behavior: 'smooth', block: 'start'});
        document.querySelector('#video').srcObject.getTracks()[0].stop();
        streaming = false;
      },
      false,
    );
    clearPhoto();
  }

  function clearPhoto() {
    const context = canvas.getContext("2d");
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const data = canvas.toDataURL("image/jpeg");
    photo.setAttribute("src", data);
  }

  function takePicture() {
    const context = canvas.getContext("2d");
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);

      const data = canvas.toDataURL("image/jpeg");
      photo.setAttribute("src", data);
    } else {
      clearPhoto();
    }
  }

  return(
    <div id="camera">
      <div id="video-div">
        <video id="video">Video stream not available.</video>
      </div>
      <button onClick={startup} id="photo-button">Enable camera</button>
      <button id="start-button">Capture</button>
    </div>
  )
}

