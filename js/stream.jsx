var Cat = require('./cat.jsx');

var dummyCats = [
{
	pic: "https://fillmurray.com/300/300",
	fact: 'A cat lives an average of 1000 years'

},
{
	pic: "https://fillmurray.com/300/301",
	fact: 'A cat was trying to jump through a window'
},
{
	pic: "https://fillmurray.com/301/300",
	fact: 'A cat used to poo on my bed daily'
}
];

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
						<Cat key={i} pic={cat.pic} fact={cat.fact} catId={i}/>
					)
				})
			}
			</div>
			)
	}
});

module.exports = Stream;