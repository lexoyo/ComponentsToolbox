import React from 'react';
import ReactDom from 'react-dom';

export default class Properties extends React.Component {
  onChange(prop, value) {
    console.log('change', prop, value);
    this.props.onChange();
  }
  render() {
    return React.createElement('ul', null,
      this.props.properties.map((prop) => {
        return <li key={prop.name}>
            <p>{prop.name}</p>
            <input type="text" value={prop.defaultValue} onChange={(e) => this.onChange(prop, e.target.value)}/>
          </li>;
      }));
  }
}
