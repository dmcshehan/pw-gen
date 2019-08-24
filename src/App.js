import React from "react";
import { Input, Button, Checkbox, Radio, Typography } from "antd";

import { app } from "./app.module.scss";
import { Array } from "core-js";

const { Title } = Typography;

class App extends React.Component {
  state = {
    password: "",
    length: 8,
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true
  };

  generatePassword = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = `"!@#&()–[{}]:;',?/*~$^+=<>`;
    const sectionSize = this.state.length / 4;

    const lowerCaseArr = new Array(sectionSize);
    const upperCaseArr = new Array(sectionSize);
    const numArr = new Array(sectionSize);
    const symbolArr = new Array(sectionSize);

    for (let i = 0; i < sectionSize; i++) {
      lowerCaseArr[i] = alphabet[Math.floor(Math.random() * 24 + 1)];
      upperCaseArr[i] = alphabet[
        Math.floor(Math.random() * 24 + 1)
      ].toUpperCase();
      numArr[i] = numbers[Math.floor(Math.random() * 9 + 1)];
      symbolArr[i] = symbols[Math.floor(Math.random() * 25 + 1)];
    }

    const fullArr = lowerCaseArr
      .concat(upperCaseArr)
      .concat(numArr)
      .concat(symbolArr);
    fullArr.sort(() => Math.random() - 0.5);
    console.log();
    this.setState({ ...this.state, password: fullArr.join("") });
  };

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
        <Input
          size='large'
          placeholder='Basic usage'
          style={{ marginBottom: 30 }}
          value={this.state.password}
        />
        <Checkbox
          checked={this.state.lowercase}
          onChange={() => this.onSecurityChangeHandler("lowercase")}
        >
          lowercase Charcaters
        </Checkbox>
        <Checkbox
          checked={this.state.uppercase}
          onChange={() => this.onSecurityChangeHandler("uppercase")}
        >
          Uppercase Characters
        </Checkbox>
        <Checkbox
          checked={this.state.numbers}
          onChange={() => this.onSecurityChangeHandler("numbers")}
        >
          Numbers
        </Checkbox>
        <Checkbox
          checked={this.state.symbols}
          onChange={() => this.onSecurityChangeHandler("symbols")}
        >
          Symbols
        </Checkbox>
        <Title level={3} style={{ marginTop: 30, marginBottom: 30 }}>
          Select The Legth
        </Title>
        <Radio.Group
          value={this.state.length}
          onChange={e => this.lengthChangeHandler(e)}
        >
          <Radio value={8}>8</Radio>
          <Radio value={16}>16</Radio>
          <Radio value={24}>24</Radio>
          <Radio value={32}>32</Radio>
        </Radio.Group>
        <Button
          size='large'
          type='danger'
          icon='login'
          style={{ marginTop: 30 }}
          block
          onClick={this.generatePassword}
        >
          Generate Password
        </Button>
      </div>
    );
  }
}

export default App;
