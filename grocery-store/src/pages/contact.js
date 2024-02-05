import { Button, Checkbox, Form, Input, Select } from "antd";

const {Option} = Select;
const { TextArea } = Input;

function AppContact() {
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select style={{ width: 70 }}>
            <Option value="86">+1</Option>
            <Option value="87">+21</Option>
          </Select>
        </Form.Item>
      );
    return (
        <div className="block contactPage">
            <div className="container">
                <h2>Contact</h2>
            <Form
                name="basic"
                style={{
                maxWidth: 600,
                }}
                initialValues={{
                remember: true,
                }}
                autoComplete="off"
                layout="vertical"
                size="large"
            >
                <Form.Item
                  label="Fullname"
                  name="fullname"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your fullname!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: 'email',
                      message: 'Please input your Email!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                 <Form.Item
                    name="phone"
                    label="Phone"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    name="message"
                    label="Message"
                    rules={[{ required: true, message: 'Please input your message!' }]}
                >
                    <TextArea rows={4} />
                </Form.Item>
                
    {/* <br />
    <br />
    <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} /> */}

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
            </Form>
            </div>

        </div>
    );
};

export default AppContact;