import { Tabs } from "antd";
import aboutBanner from "../assets/images/aboutBanner.jpg";

const onChange = (key) => {
    console.log(key);
  };

const items = [
    {
      key: '1',
      label: 'About',
      children: 'Pellentesque sem tellus, viverra eget est non, fermentum tristique diam. Duis viverra massa dui, sed pretium risus aliquam convallis. Sed ut ex nec eros sagittis cursus vel id dolor. Donec at rutrum quam. Vestibulum non urna auctor, tempor nisi sed, ornare mi. Aenean blandit lacus nec pulvinar dictum. Mauris hendrerit sollicitudin dolor, vel viverra mi sagittis convallis. Maecenas elementum eros eu efficitur dapibus. Etiam vitae pharetra erat. Proin eu porttitor metus, nec aliquam justo. Curabitur efficitur fermentum libero et porta.',
    },
    {
      key: '2',
      label: 'Investors',
      children: 'Maecenas elementum eros eu efficitur dapibus. Etiam vitae pharetra erat. Proin eu porttitor metus, nec aliquam justo. Curabitur efficitur fermentum libero et porta.Vestibulum tincidunt hendrerit neque, quis pharetra justo tristique non. Morbi eget ornare dui, nec scelerisque turpis. In suscipit suscipit mollis. Sed blandit felis quam, sit amet convallis diam ullamcorper vitae. Donec non eros mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla ac lacus et gravida. ',
    },
    {
      key: '3',
      label: 'Careers',
      children: 'Vestibulum tincidunt hendrerit neque, quis pharetra justo tristique non. Morbi eget ornare dui, nec scelerisque turpis. In suscipit suscipit mollis. Sed blandit felis quam, sit amet convallis diam ullamcorper vitae. Donec non eros mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla ac lacus et gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt tortor quis dignissim pellentesque. Aliquam vehicula, arcu ac aliquet tempus, orci purus blandit orci, vel elementum nulla ante eu risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

function AppAbout() {
    return (
        <div className="block aboutPage">
            <div className="container">
                <h2>About</h2>
                <div className="bannerImage">
                    <img src={aboutBanner} alt="banner" />
                </div>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
        </div>
    );
};

export default AppAbout;