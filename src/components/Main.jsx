import logo from '../images/logo.png';
import profilePlaceholder from '../images/profile-placeholder.png';
import QR from './QrCode';

export default function Main({url}) {

  const inputs = [...Array(5)].map((e,i) =>
    <div className="input-div" key={i}>
      <input type="text" placeholder="Type a skill and level (1 to 10)" />
        <input type="text"
          className="rating"
          size="2"
          maxLength="2"
          pattern="[0-9]{1,2}"
          placeholder="10" /> 
        <hr />
    </div>);
  
  return(
    <main>
      <div className="stripes" id="top"></div>
      <div className="stripes" id="mid"></div>
      <div className="stripes" id="bottom"></div>
      <div id="profile-pic">       
        <img src={profilePlaceholder} id="photo" alt="" />
      </div>
      <img src={logo} id="logo" alt="logo" />
      <input type="text" id="name" name="name" placeholder="Type your name here" />

      <div id="attr-div"> 
        {inputs}
      </div>

      <div id="fact-file">
        <h2>FACT FILE</h2>
        <div id="qr-code">
          <QR url={url} />
        </div>
        <textarea name="text-area" placeholder="Write something about yourself here" />
      </div>
    </main>
  );
}
