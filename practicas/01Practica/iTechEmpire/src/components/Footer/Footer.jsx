import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "./Footer.css"

const Footer = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  
    return(
        <footer class="page-footer">
            <div class="footer-copyright">
                <div class="container">
                    © 2023 Copyright
                </div>
            </div>
        </footer>
    )
}

export default Footer;