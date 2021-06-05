import React from 'react';
import './App.css';

class App extends React.Component {
	state = {
		count : 0
	};
	modify = (n) =>{
		this.setState({count : n})
	}
	render(){
		const {count} = this.state;
		return (
			<div>
		   	<div>
			  {count}
			  <button onClick={ ()=>{ this.modify(count + 1)} }>Increament</button>
		  	</div>
			</div>
		)
	}
}

export default App;
