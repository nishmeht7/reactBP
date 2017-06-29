import React from 'react';


export class homepageComponent extends React.Component {
	constructor () {
		super()
	}

	render (){
		return (
			<div>
				<h1>Welcome to the world of heroNish bitch!</h1>
			</div>
		)
	}
}

/* ------Container--------------*/

import { connect } from 'react-redux';

function mapState(state, ownProps){

}

function mapDispatch(state, ownProps){

}

const homepageContainer = connect(mapState, mapDispatch)(homepageComponent);

export default homepageContainer;
