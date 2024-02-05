import { BackTop } from "antd";
import payment from "../../assets/images/payment.png";

function FooterCopyright() {
    return (
        <div className="footerCopyright">
            <div className="container">
                <div className="copyright">
                    &copy; 2024 Bubba Jaymes 
                </div>
                <div className="toTop">
                    <img src={payment} alt="payment" />
                </div>
               
            </div>
            {/* <BackTop  />  */}
        </div>
    );
}

export default FooterCopyright;