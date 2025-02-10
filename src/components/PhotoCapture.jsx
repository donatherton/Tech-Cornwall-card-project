const width = 300;
let height = 0;

let streaming = false;

let video = null;
let canvas = null;
let photo = null;
let startButton = null;

function startup() {
  video = document.querySelector('#video');
  canvas = document.querySelector('#canvas');
  photo = document.querySelector('#photo');
  startButton = document.querySelector('#start-button');

  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    })
    .catch((err) => {
      console.error(`An error occurred: ${err}`);
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
      e.preventDefault();
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

export default function GetPhoto() {

  const viewDiv = <div id="camera">
    <video id="video">Video stream not available.</video>
    <button id="start-button">Take photo</button>
  </div>

  return(
    <>
      {viewDiv}
      {window.addEventListener("load", startup, false)}
    </>
  )
}

