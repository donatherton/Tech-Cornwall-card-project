import profilePic from '../images/profile.png';
import logo from '../images/logo.png';

export default function Main() {

  const inputs = [...Array(5)].map((e,i) =>
    <div className="input-div" key={i}>
      <input type="text" placeholder="Your attribute here" />
        <input type="text"
          className="rating"
          size="2"
          maxLength="2"
          pattern="[0-9]{1,2}" /> 
        <hr />
    </div>);
  
  return(
    <main>
      <div className="stripes" id="top"></div>
      <div className="stripes" id="mid"></div>
      <div className="stripes" id="bottom"></div>
      <img src={profilePic} id="profile-pic" alt="Profile picture" />
      <img src={logo} id="logo" alt="logo" />
      <input type="text" id="name" name="name" placeholder="Your name here" />

      <div id="attr-div"> 
        {inputs}
      </div>

      <div id="fact-file">
        <h2>FACT FILE</h2>
        <textarea name="text-area" placeholder="Say a few words about yourself here" />
      </div>
    </main>
  );
}
