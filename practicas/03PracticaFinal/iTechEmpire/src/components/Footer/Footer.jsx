import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "./Footer.css"

const Footer = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  
    return(
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © 2023 Copyright
                </div>
            </div>
        </footer>
    )
}

export default Footer;