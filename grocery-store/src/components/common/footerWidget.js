import { Col, Row, Tag } from "antd";
import { Avatar, List } from 'antd';

const featured = [
    {
      image: require('../../assets/images/img-footer1.jpg'),
      title: 'Kelloggs Crunchy Nut Hazelnut',
      cost: '£2.50',
      link: 'https://www.google.com/'
    },
    {
      image: require('../../assets/images/img-footer2.jpg'),
      title: 'Branston Baked Beans in a Rich',
      cost: '£3.50',
      link: 'https://www.google.com/'
    },
    {
      image: require('../../assets/images/img-footer3.jpg'),
      title: 'Breeze Toilet Tissue Soft White 24 Roll',
      cost: '£2.50',
      link: 'https://www.google.com/'
    },
  ];

  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

function FooterWidgetr() {
    return (
        <div className="footerWidget">
            <div className="container" >
                <Row gutter={[20, 20]}>
                    {/* featured */}
                    <Col xs={24} sm={12} md={6} >
                      <h3>Featured</h3>
                        <List 
                            itemLayout="horizontal"
                            dataSource={featured}
                            renderItem={(item) => (
                              <List.Item >
                                <List.Item.Meta
                                  avatar={<Avatar src={item.image} />}
                                  title={<a href={item.link}>{item.title}</a>}
                                  description={item.cost}
                                />
                              </List.Item>
                            )}
                        />                        
                    </Col>
                    {/* Top Rated */}
                    <Col xs={24} sm={12} md={6}>
                      <h3>Top Rated</h3>
                        <List 
                            itemLayout="horizontal"
                            dataSource={featured}
                            renderItem={(item) => (
                              <List.Item >
                                <List.Item.Meta
                                  avatar={<Avatar src={item.image} />}
                                  title={<a href={item.link}>{item.title}</a>}
                                  description={item.cost}
                                />
                              </List.Item>
                            )}
                        />                       
                    </Col>     
                    {/* Tags */}
                    <Col xs={24} sm={12} md={6}>
                      <h3>Tags</h3>
                      <div className="tags">
                        <Tag>Frozen</Tag>
                        <Tag><a href="https://www.lipsum.com/feed/html">Kitchen</a></Tag>
                        <Tag closable>Drinks</Tag>
                        <Tag closable>Beer &amp; wine</Tag>
                        <Tag>Chocolates</Tag>
                      </div>
                    </Col>  
                    {/* Recent Posts */}
                    <Col xs={24} sm={12} md={6}>
                      <h3>Recent Posts</h3>
                      <List
                        size="small"
                        className="recentPost"
                        dataSource={data}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                      />
                    </Col>                                                     
                </Row>
            </div>
        </div>
    );
}

export default FooterWidgetr;