import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <footer>
            <p>Copyright ⓒ {currentYear} by Thanh Hien Tran</p>
        </footer>
    );
}

export default Footer;