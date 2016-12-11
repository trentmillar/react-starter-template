import React from 'react';

const data = {
  'us': {
    'name': 'United States',
    'icon': 'flags/us.jpg',
  },
  'ca': {
    'name': 'Canada',
    'icon': 'flags/ca.jpg',
  }
};

export default class Flag extends React.Component {
  render() {
    const name = data[this.props.code].name;
    const icon = data[this.props.code].icon;
    return (
      <span className="flag">
        <img className="icon" title={name} src={`/images/${icon}`}/>
        {this.props.showName && <span className="name"> {name}</span>}
      </span>
    );
  }
}