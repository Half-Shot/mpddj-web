var React = require('react');
module.exports = React.createClass({
  getInitialState: function() {
    return {
      songtitle: "%songtitle%",
      songuser: "%songuser%"
    };
  },
  render: function() {
    return <div id="nowplaying">
      <div id="albumart">
        <div id="avatar"></div>
      </div>
      <p id="songtitle">Now Playing {this.state.songtitle}</p>
      <p id="songuser">By {this.state.songuser}</p>
    </div>;
  }
});
