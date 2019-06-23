import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react';

class navigationBar extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <Menu stackable>
        <Menu.Item>
          <img src='/logo.png' />
        </Menu.Item>

        <Menu.Item
          name='features'
          
        >
          Features
        </Menu.Item>

        <Menu.Item
          name='testimonials'
         
        >
          Testimonials
        </Menu.Item>

        <Menu.Item name='sign-in' >
          Sign-in
        </Menu.Item>
      </Menu>
        </div> 
        );
    }
}
 
export default navigationBar;
