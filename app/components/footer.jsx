import Logo from './Resources/logo.png';
const Footer = () => {
    return (
        <footer>
            <nav id="footnav1">
                <label class="sign">
                    <figure class="logo" style={{backgroundImage: `url(${Logo.src})`}}></figure>
                    <h5 class="logoName">LAIMUNATI</h5>
                </label>
                <ul>
                    <li><a href="./">Home</a></li>
                    <li><a href="./AboutUs">About Us</a></li>
                    <li><a href="">Our Businesses</a></li>
                    <li><a href="#contactus">Contact Us</a></li>
                </ul>
            </nav>
            <nav id="footnav2">
                <ul>
                    <li><a href="./Build">Build</a></li>
                    <li><a href="./Energy">Energy</a></li>
                    <li><a href="./Investments">Investments</a></li>
                    <li><a href="./Technology">Technology</a></li>
                </ul>
                <ul id="emailaddress">
                    <li>Email: <a href="mailto: contact@laimunati.com">contact@laimunati.com</a></li>
                </ul>
            </nav>
            <nav id="footnav3">
                <ul>
                    <li>Copyright © Lamunati Group</li>
                    <li>Terms of Use Privacy Policy</li>
                    <li>Powered by - The #1 Open Source eCommerce</li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;