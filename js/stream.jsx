var Stream = React.createClass({

	getInitialState: function(){
		return{
			cats: dummyCats
		}
	},


	render: function(){
		return(
			<div className="stream">
			{
				this.state.cats.map(function(cat, i){
					return(
						<Cat key={i} />
					)
				})
			}
			</div>
			)
	}
});

module.exports = Stream;