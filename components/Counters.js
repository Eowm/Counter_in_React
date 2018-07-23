var Counters = React.createClass({
	render: function() {
		return (
				React.createElement('div', {className: 'container'},
                React.createElement('h1', {className: 'header'}, 'COUNTERS'),
                React.createElement(Counter),
        )
        )
	}
})