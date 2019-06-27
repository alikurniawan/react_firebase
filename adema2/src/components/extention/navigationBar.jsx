import React, { Component } from "react";
import { Menu, Image, Icon, Dropdown } from "semantic-ui-react";
import Logo1 from "../images/lg1.jpg";
import "../css/animate.css";
import "../css/bgDegradation.css";

const options = [
  { key: 1, text: 'This is a super long item', value: 1 },
  { key: 2, text: 'Dropdown direction can help', value: 2 },
  { key: 3, text: 'Items are kept within view', value: 3 },
]

class navigationBar extends Component {
  constructor(props) {
    super(props);

    this.handleItemClickLogo = this.handleItemClickLogo.bind(this);
    this.handleItemClickHome = this.handleItemClickHome.bind(this);
    this.handleItemClickAbout = this.handleItemClickAbout.bind(this);
    this.handleItemClickLogin = this.handleItemClickLogin.bind(this);
    // this.handleItemClickSignup = this.handleItemClickSignup.bind(this);
    this.handleItemClickHelp = this.handleItemClickHelp.bind(this);
  }

  handleItemClickLogo = () => {
    document.location = "/";
  };

  handleItemClickHome = function() {
    document.location = "/";
  };

  handleItemClickAbout = () => {
    document.location = "/About";
  };

  // handleItemClickSignup = () => {
  //   document.location = "/SignUp";
  // };

  handleItemClickLogin = () => {
    document.location = "/Login";
  };

  handleItemClickHelp = () => {
    document.location = "/Help";
  };
  

  render() {
    return (
      <div>
        <Menu stackable>
          <Menu.Item>
            <Image
              src={Logo1}
              size="tiny"
              className="animated wobble"
              onClick={this.handleItemClickLogo}
            />
          </Menu.Item>

          <Menu.Item name="home" onClick={this.handleItemClickHome}>
            <Icon name="bomb" />
            Home
          </Menu.Item>
          <Dropdown
            item
            simple
            text="Big Menu"
            direction="right"
            options={options}
          />
          
          <Menu.Item name="about" onClick={this.handleItemClickAbout}>
            <Icon name="bar" />
            About
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item name="login" onClick={this.handleItemClickLogin}>
              Login
            </Menu.Item>

            <Menu.Item name="help" onClick={this.handleItemClickHelp}>
              Help
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default navigationBar;
