import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ComponentCreator from './ComponentCreator';
import ComponentSelector from './ComponentSelector';
import Properties from './Properties';

class App extends React.Component {
  addComponent() {
    console.log('addComponent');
    let type = this.state.selectedType;
    let props = this.state.properties;
    let el = document.createElement('div');
    document.body.appendChild(el)
    ComponentCreator.create(type, el, props);
  }
  selectAddType(selectedType) {
    this.setState({
      properties: ComponentCreator.getProps(selectedType)
      .filter(function(prop) {return prop.defaultValue != null}),
      selectedType: selectedType,
    });
  }
  state = {
    properties: [],
  }
  render() {
    return <div>
        <ComponentSelector
          onChange={value => this.selectAddType(value)}
          />
        <Properties
          properties={this.state.properties}
          onChange={(props) => this.setState({properties: props})}
          />
        <button onClick={() => this.addComponent()}>+</button>
      </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

