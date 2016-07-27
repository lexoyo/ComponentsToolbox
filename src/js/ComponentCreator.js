import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class ComponentCreator {
  static components = require('material-ui/')
  static create(type, el, props, children) {
    var component = React.createElement(ComponentCreator.components[type], props, children);

    ReactDOM.render(
      <MuiThemeProvider>
        {component}
      </MuiThemeProvider>,
      el);
  }
  static getProps(type) {
    let res = [];
    for(let prop in ComponentCreator.components[type].propTypes) {
      res.push({
        'name': prop,
        'type': ComponentCreator.components[type].propTypes[prop],
        'defaultValue': ComponentCreator.components[type].defaultProps ? ComponentCreator.components[type].defaultProps[prop] : null,
      });
    }
    return res;
  }
  static getType(prop) {
    for (var type in React.PropTypes) {
      if(prop == React.PropTypes[type]) return type;
    }
    return 'unknown';
  }
}

export default ComponentCreator;
