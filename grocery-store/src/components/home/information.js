import { Col, Row } from "antd";
import bgImage1 from "../../assets/images/ad-img1.png";
import bgImage2 from "../../assets/images/ad-img2.png";

function Information() {
    return (
        <div className="block informationBlock">
            <Row gutter={[20, 20]}>
                <Col xs={24} md={12}>
                    <div className="holder"
                         style={{
                            backgroundImage: `url(${bgImage1})`,
                            backgroundRepeat: 'no-repeat'
                         }}>
                        <h3>
                            Everything essentials from
                        </h3>
                        <div className="price">$60</div>
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <div className="holder" 
                         style={{
                            backgroundImage: `url(${bgImage2})`,
                            backgroundRepeat: 'no-repeat'
                         }}>                    
                        <h3>
                            Same day delivery
                        </h3>
                        <p>
                            from when you spend over $20
                        </p>
                    </div>                    
                </Col>
            </Row>
        </div>
    );
}

export default Information;