class Machine extends React.Component {
	render() {
		let num1 = Math.floor(Math.random() * 3) + 1
		let num2 = Math.floor(Math.random() * 3) + 1
		let num3 = Math.floor(Math.random() * 3) + 1
        // const {s1,s2,s3} = this.props;
        const winner = (num1 === num2) && (num2 === num3) 
		return (
			<div>
				<p>{num1} {num2} {num3}</p>
                <p>{winner ? "Winner!" : "Loser"}</p>
			</div>
		);
	};
};
