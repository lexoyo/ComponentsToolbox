import React from 'react';
import ReactDom from 'react-dom';

export default class ComponentSelector extends React.Component {
  render() {
    return <select onChange={(e) => this.props.onChange(e.target.value)} id="ComponentName">
    <option value="AppBar">AppBar</option>
    <option value="AutoComplete">AutoComplete</option>
    <option value="Avatar">Avatar</option>
    <option value="Badge">Badge</option>
    <option value="Card">Card</option>
    <option value="CardActions">CardActions</option>
    <option value="CardHeader">CardHeader</option>
    <option value="CardMedia">CardMedia</option>
    <option value="CardTitle">CardTitle</option>
    <option value="CardText">CardText</option>
    <option value="Checkbox">Checkbox</option>
    <option value="Chip">Chip</option>
    <option value="CircularProgress">CircularProgress</option>
    <option value="DatePicker">DatePicker</option>
    <option value="Dialog">Dialog</option>
    <option value="Divider">Divider</option>
    <option value="Drawer">Drawer</option>
    <option value="DropDownMenu">DropDownMenu</option>
    <option value="FlatButton">FlatButton</option>
    <option value="FloatingActionButton">FloatingActionButton</option>
    <option value="FontIcon">FontIcon</option>
    <option value="GridList">GridList</option>
    <option value="GridTile">GridTile</option>
    <option value="IconButton">IconButton</option>
    <option value="IconMenu">IconMenu</option>
    <option value="LinearProgress">LinearProgress</option>
    <option value="List">List</option>
    <option value="ListItem">ListItem</option>
    <option value="MakeSelectable">MakeSelectable</option>
    <option value="Menu">Menu</option>
    <option value="MenuItem">MenuItem</option>
    <option value="MuiThemeProvider">MuiThemeProvider</option>
    <option value="Paper">Paper</option>
    <option value="Popover">Popover</option>
    <option value="RadioButton">RadioButton</option>
    <option value="RadioButtonGroup">RadioButtonGroup</option>
    <option value="RaisedButton">RaisedButton</option>
    <option value="RefreshIndicator">RefreshIndicator</option>
    <option value="SelectField">SelectField</option>
    <option value="Slider">Slider</option>
    <option value="Subheader">Subheader</option>
    <option value="SvgIcon">SvgIcon</option>
    <option value="Step">Step</option>
    <option value="StepButton">StepButton</option>
    <option value="StepContent">StepContent</option>
    <option value="StepLabel">StepLabel</option>
    <option value="Stepper">Stepper</option>
    <option value="Snackbar">Snackbar</option>
    <option value="Tabs">Tabs</option>
    <option value="Tab">Tab</option>
    <option value="Table">Table</option>
    <option value="TableBody">TableBody</option>
    <option value="TableFooter">TableFooter</option>
    <option value="TableHeader">TableHeader</option>
    <option value="TableHeaderColumn">TableHeaderColumn</option>
    <option value="TableRow">TableRow</option>
    <option value="TableRowColumn">TableRowColumn</option>
    <option value="TextField">TextField</option>
    <option value="TimePicker">TimePicker</option>
    <option value="Toggle">Toggle</option>
    <option value="Toolbar">Toolbar</option>
    <option value="ToolbarGroup">ToolbarGroup</option>
    <option value="ToolbarSeparator">ToolbarSeparator</option>
    <option value="ToolbarTitle">ToolbarTitle</option>
    </select>;
  }
}
