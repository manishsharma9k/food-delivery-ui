import "../CSS/Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div>
                    <h3>Company</h3>
                    <p>About Us</p>
                    <p>Blog</p>
                    <p>Contact Us</p>
                    <p>Pricing</p>
                    <p>Testimoniols</p>

                </div>
                <div>
                    <h3>Support</h3>
                    <p>Help Center</p>
                    <p>Terms of service</p>
                    <p>Legal</p>
                    <p>Privacy Policy</p>
                    <p>Status</p>
                </div>
                <div>
                    <h3>Stay up to date</h3>

                    <input type="text" placeholder="Your email address"/>
                </div>
            </div>
            <p className="copyright">
                Copyright © 2026 Food Delivery
            </p>

        </div>
    )
}
export default Footer;