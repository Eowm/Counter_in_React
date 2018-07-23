var Counter = React.createClass({
	getInitialState: function() {
		return{
			counter: 0
		};
	},

	increment: function() {
        this.setState({
            counter: this.state.counter + 1 
        });
    },
    
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function(){
    	return (
    		React.createElement('div', {className: 'counter'},
    		React.createElement('h2', {className: 'counterHeader'}, 'Counter!'),
    		 React.createElement('button', {onClick: this.increment, className: 'button plus'}, '+'),
    		 React.createElement('button', {onClick: this.decrement, className: 'button minus'}, '-'),
    		 React.createElement('h3', {className: 'result'}, 'Result:'),
    		React.createElement('div', {className: 'output'}, this.state.counter)
    		)
    	)

    }
})