import React, {Component, useState} from 'react';
import './App.css';

const App = () =>{
	//useState returns Arry that first element is parameter(you grant to useState) and second element is function that controls first one.
	const [count, setCount] = useState(0);
	const [email, setEmail] = useState("");
	const updateEmail = e => {
		console.log(e.target);
		const {target: {value}} = e;
		setEmail(value);
	}
	return(
		<div>
		  {count}
	  	<button onClick={ ()=> { setCount(count + 1); } }>Increament</button>
			<button onClick={ ()=> { setCount(count - 1); } }>Decreament</button>
			<input placeholder="Email" value={email} onChange={updateEmail}/>
		</div>
	);
}
export default App;
