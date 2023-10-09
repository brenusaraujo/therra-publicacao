import React from "react";
import Logo from "../Assets/Logo.png";
import { BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {

  const URL_INSTAGRAM = "https://www.instagram.com/therraconstrutora/";
  const URL_FACEBOOK = "https://www.facebook.com/";
  const URL_GOOGLE_MAPS = "https://www.google.com/maps/place/Condom%C3%ADnio+Empresarial+%C3%94mega/@-12.9813171,-38.4577584,17z/data=!4m10!1m2!2m1!1sAv.+Tancredo+Neves,+n%C2%B0+1283,+Edf.+Empresarial+%C3%94mega,+sala+902,+Caminho+das+Arvores!3m6!1s0x7161b1aa96f5ccd:0xdc97cbf51a17b47e!8m2!3d-12.981398!4d-38.455217!15sClRBdi4gVGFuY3JlZG8gTmV2ZXMsIG7CsCAxMjgzLCBFZGYuIEVtcHJlc2FyaWFsIMOUbWVnYSwgc2FsYSA5MDIsIENhbWluaG8gZGFzIEFydm9yZXOSARNjb25kb21pbml1bV9jb21wbGV44AEA!16s%2Fg%2F1tnmry4_?authuser=0&entry=ttu";


  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="logo" />
        </div>
        <div className="footer-icons">
          <a href={URL_INSTAGRAM} target="blank">
            <BsInstagram />
          </a>
          <a href={URL_FACEBOOK} target="blank">
            <BsFacebook />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <a target="blank" href={URL_GOOGLE_MAPS} className="footer-option">Av. Tancredo Neves, n° 1283, Edf. Empresarial Ômega, sala 902, Caminho das Árvores, 41820-021, Salvador.</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
