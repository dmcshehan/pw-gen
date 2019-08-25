import React from "react";
import {
  Input,
  Button,
  Checkbox,
  Radio,
  Typography,
  Icon,
  Tooltip,
  Select,
  Row,
  Col,
  Card,
  Form
} from "antd";

import { app } from "./app.module.scss";

const { Title } = Typography;
const { Search } = Input;
const { Option } = Select;

class App extends React.Component {
  state = {
    password: "",
    length: 8,
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true
  };

  generatePassword = () => {};

  onSecurityChangeHandler = type => {
    switch (type) {
      case "lowercase":
        this.setState({ ...this.state, lowercase: !this.state.lowercase });
        break;
      case "uppercase":
        this.setState({ ...this.state, uppercase: !this.state.uppercase });
        break;
      case "numbers":
        this.setState({ ...this.state, numbers: !this.state.numbers });
        break;
      case "symbols":
        this.setState({ ...this.state, symbols: !this.state.symbols });
        break;
        deafult: break;
    }
  };

  lengthChangeHandler = e => {
    this.setState({ ...this.state, length: e.target.value });
  };

  render() {
    return (
      <div className={app}>
        <Card title='Password Generator'>
          <Search
            style={{ marginBottom: 30 }}
            value={this.state.password}
            placeholder='input search text'
            enterButton={
              <Button title='prompt text' type='primary' icon='copy'>
                Copy To Clipboard
              </Button>
            }
            size='large'
            onSearch={value => console.log(value)}
          />

          <Row gutter={16}>
            <Col span={18}>
              <Title
                level={4}
                style={{ marginTop: 0, marginBottom: 10, fontWeight: 200 }}
              >
                Select Strongness
              </Title>
              <Checkbox
                checked={this.state.lowercase}
                onChange={() => this.onSecurityChangeHandler("lowercase")}
                block
              >
                Include lowercase Charcaters ( e.g. abcdefgh )
              </Checkbox>
              <br />
              <Checkbox
                checked={this.state.uppercase}
                onChange={() => this.onSecurityChangeHandler("uppercase")}
              >
                Include Uppercase Characters ( e.g. ABCDEFGH )
              </Checkbox>
              <br />
              <Checkbox
                checked={this.state.numbers}
                onChange={() => this.onSecurityChangeHandler("numbers")}
              >
                Include Numbers ( e.g. 123456 )
              </Checkbox>
              <br />
              <Checkbox
                checked={this.state.symbols}
                onChange={() => this.onSecurityChangeHandler("symbols")}
              >
                Include Symbols ( e.g. @#$% )
              </Checkbox>
            </Col>
            <Col span={6}>
              <Title
                level={4}
                style={{ marginTop: 0, marginBottom: 10, fontWeight: 200 }}
              >
                Select The Legth
              </Title>

              <Select
                defaultValue='8'
                style={{ width: 120 }}
                onChange={e => this.lengthChangeHandler(e)}
              >
                {new Array(15).fill(null).map((content, index) => (
                  <Option value={index}>{index}</Option>
                ))}
              </Select>
            </Col>
            <Col span={12}>
              <Button
                size='large'
                type='primary'
                icon='login'
                style={{ marginTop: 30 }}
                block
                onClick={this.generatePassword}
              >
                Generate Password
              </Button>
            </Col>
            <Col span={12}>
              <Button
                size='large'
                type='danger'
                icon='login'
                style={{ marginTop: 30 }}
                block
                onClick={this.generatePassword}
              >
                Clear Password
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default App;
