import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  SideDrawerCloseHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer
          closed={this.SideDrawerCloseHandler}
          open={this.state.showSideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
