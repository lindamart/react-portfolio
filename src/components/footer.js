import React from 'react';
import resume from "../assets/lindaResume.pdf"

function Footer() {   
    return (
    <div class="footer" id="footer">
        <a href="https://github.com/lindamart"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" class="icon"/></a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=www.in.com/in/linda-m-319246217"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" class="icon"/></a>
        <p>
        &copy; Linda Martinez  |  <a href={resume} class="link">download resume</a>  |  <a href="https://coolors.co/f06543-e8e9eb-e0dfd5-313638-f09d51">color palette</a>  |  made with <img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React"/>
        </p>

    </div>
    )
}

export default Footer;