var Stream = require('./stream.jsx');
var Sidebar = require('./sidebar.jsx');
var CatLyf = React.createClass({
	render: function(){
		return (
			<div className="catLyf">
				<Stream />
				<Sidebar />
			</div>
			)
	}
});

module.exports = CatLyf;