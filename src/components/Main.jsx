import profilePic from '../images/profile.png';
import logo from '../images/logo.png';
//import { useState } from 'react';


export default function Header() {
//  const [name, setName] = useState('Your name here');

// function updateName(e) {
// //    if (e.target.value.length > 1) e.target.value = e.target.value.slice(-1);
//     setName(e.target.value);
//   }

  return(
    <main>
      <div className="stripes" id="top"></div>
      <div className="stripes" id="mid"></div>
      <div className="stripes" id="bottom"></div>
      <img src={profilePic} id="profile-pic" alt="Profile picture" />
      <img src={logo} id="logo" alt="logo" />
      <input type="text" id="name" name="name" placeholder="Your name here" />
      <div id="attr-div">
      <input type="text" id="attr1" name="attr1" placeholder="Your attribute here" />
      <input type="text"
        className="rating"
        id="rating1"
        name="rating1"
        size="2"
        maxLength="2"
        pattern="[0-9]{1,2}" /> 
      <hr />
      <input type="text" id="attr2" name="attr2" placeholder="Your attribute here" />
        <input type="text"
        className="rating"
        id="rating2"
        name="rating2"
        size="2"
        maxLength="2"
        pattern="[0-9]{1,2}" />
      <hr />
      <input type="text" id="attr3" name="attr3" placeholder="Your attribute here" />
        <input type="text"
        className="rating"
        id="rating3"
        name="rating3"
        size="2"
        maxLength="2"
        pattern="[0-9]{1,2}" />
      <hr />
      <input type="text" id="attr4" name="attr4" placeholder="Your attribute here" />
        <input type="text"
        className="rating"
        id="rating4"
        name="rating4"
        size="2"
        maxLength="2"
        pattern="[0-9]{1,2}" />
      <hr />
      <input type="text" id="attr5" name="attr5" placeholder="Your attribute here" />
        <input type="text"
        className="rating"
        id="rating5"
        name="rating5"
        size="2"
        maxLength="2"
        pattern="[0-9]{1,2}" />
      <hr />
      </div>
      <div id="fact-file">
        <h2>FACT FILE</h2>
        <textarea name="text-area" placeholder="Say a few words about yourself here" />
      </div>
      

    </main>
  );
}
