class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Slot Machine Game</h1>
				<Machine 
				s1="x"
				s2="y"
				s3="z"
				/>
				<Hello 
				to="Ringo"
				from="Paul"
				bangs={5}/>
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));
