import React from 'react';

var Main = React.createClass({
  render: function(){
    return (
      <div className="container">
        <h1>Monitaur</h1>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;