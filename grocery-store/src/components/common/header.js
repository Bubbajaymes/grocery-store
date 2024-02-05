import { FacebookOutlined, InstagramOutlined, MailOutlined, MenuOutlined, MobileOutlined, TwitterOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function AppHeader() {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };

    return (
        <div className="container">
            {/* Top Bar */}
            <div className="topBar">
                <div className="contactInfo">
                    <ul>
                        <li><a href="tel: 0716641112"><span><MobileOutlined /> 0716641112</span></a></li>
                        <li><a href="mailto: jaymesbubba14@gmail.com"><span><MailOutlined />jaymesbubba14@gmail.com</span></a></li>
                    </ul>
                </div>
                <div className="otherInfo">
                    <ul className="socialMedia">
                        <li><a href="https://www.facebook.com/jaymesbubba"></a><FacebookOutlined /></li>
                        <li><a href="https://twitter.com/BubbaJaymes"></a><TwitterOutlined /></li>
                        <li><a href="https://instagram.com"></a><InstagramOutlined /></li>
                    </ul>
                    <button><UserOutlined /> My Account</button>
                </div>
            </div>
            {/* Header */}
            <div className="header separator">
                <div className="logo">
                    Grocery
                </div>
                <div className="mobileVisible">
                    <Button type="primary" onClick={showDrawer}>
                        <MenuOutlined />
                    </Button>
                    <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                        <nav>
                            <ul>
                                <li><NavLink onClick={onClose} to='/'>Home</NavLink></li>
                                <li><NavLink onClick={onClose} to='/about'>About</NavLink></li>
                                <li><NavLink onClick={onClose} to='/shop'>Shop</NavLink></li>
                                <li><NavLink onClick={onClose} to='/faq'>Faq</NavLink></li>
                                <li><NavLink onClick={onClose} to='/contact'>Contact</NavLink></li>
                            </ul>
                        </nav>
                    </Drawer>
                </div>
                <nav className="mobileHidden">
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/shop'>Shop</NavLink></li>
                        <li><NavLink to='/faq'>Faq</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default AppHeader;