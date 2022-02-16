import react from 'react';
import "./contacts.css";
import Phone from "../img/phone.png";
import Email from "../img/email.png";

//import { useContext, useRef, useState } from "react";
//import emailjs from "emailjs-com";
//import { ThemeContext } from "../context";

const Contacts = () => {
  return (
<div><h1>hello world</h1></div>
  );}
  export default Contacts

<<<<<<< HEAD
  //const formRef = useRef();
  //const [done, setDone] = useState(false)
  //const theme = useContext(ThemeContext);
  //const darkMode = theme.state.darkMode;
=======
  const handleSubmit = (e) => {
    e.preventDefault();//prevent automatic reload of page.
    emailjs
      .sendForm(
        "service_tghsh9u",
        "template_txhveon",
        formRef.current,
        "user_uKCDZGDD9R1zTLlGkxGaI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
>>>>>>> 097c02ff9ac0596d2f5a7402c271b14154e91a47

  //const handleSubmit = (e) => {
   // e.preventDefault();
    //emailjs
     // .sendForm(
     // //  "service_tghsh9u",
        //"template_txhveon",
        //formRef.current,
        ///
      //"user_uKCDZGDD9R1zTLlGkxGaI"
    //  )
      //.then(
       // (result) => {
       //   console.log(result.text);
       //   setDone(true)
      //  },
      //  (error) => {
     //     console.log(error.text);
     //   }
    //  );
 // };

  //return (
    {/*<div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 1234 556 75
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              contact@lama.dev
            </div>
            
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};
<<<<<<< HEAD
*/}
=======

export default Contacts;
>>>>>>> 097c02ff9ac0596d2f5a7402c271b14154e91a47
