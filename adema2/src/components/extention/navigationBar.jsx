import React, {Component} from 'react';
import { Menu, Image } from 'semantic-ui-react';
import Logo1 from '../images/lg1.jpg';
import '../css/animate.css';

class navigationBar extends Component {
    constructor(props){
      super(props);

      this.handleItemClickHome = this.handleItemClickHome.bind(this);
      this.handleItemClickSignup = this.handleItemClickSignup.bind(this);
      this.handleItemClickHelp = this.handleItemClickHelp.bind(this);
    }

    handleItemClickHome = function(){
        document.location = "/";
    }

    handleItemClickSignup = () => {
      document.location = "/SignUp";
    }

    handleItemClickHelp = () => {
      document.location = "/Help";
    }

    render() { 

        return ( 
        <div>
            <Menu stackable>
        <Menu.Item>
          <Image src={Logo1} size='tiny' className='animated wobble' />
        </Menu.Item>

        <Menu.Item
          name='home'
          onClick={this.handleItemClickHome}
        >
          Home
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='signup' 
          onClick={this.handleItemClickSignup}
          >
            Sign Up
          </Menu.Item>

          <Menu.Item name='help' 
          onClick={this.handleItemClickHelp}
          >
            Help
          </Menu.Item>
        </Menu.Menu>
      </Menu>
        </div> 
        );
    }
}
 
export default navigationBar;
