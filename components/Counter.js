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

    getDefaultProps() {
       console.log('this method is used when we want to initialize default component props.');
    },
    componentWillMount() {
        console.log('This method starts before render component. Prepare component to render.');
    },
    componentDidMount() {
        console.log('This method starts just after start component. We can download some data, do some change on the component, change state component etc.');
    },
    componentWillUnmount() {
        console.log('This method start when component is delete from DOM.');
    },
    componentWillReceiveProps(nextProps) {
        console.log('This method start when we initialize component in parent component and we set some properties for this child component.');
    },
    componentWillUpdate(nextProps, nextState) {
        console.log('This method start after shouldComponentUpdate method if get "true". This method prepare component to some change. If we set new property or state');
    },
    componentDidUpdate(prevProps, prevState) {
        console.log('This method start after render method. In this method we can change something in props or state');
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