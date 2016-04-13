var React = require('react');

var NowPlaying = require('./comp_nowplaying.js');

module.exports = React.createClass({
  render: function() {
    return <header>
      <NowPlaying></NowPlaying>
    </header>;
  }
});
