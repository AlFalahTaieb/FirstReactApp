"use strict"

import React from 'react';
import Menu from './components/menu';
import Footer from './components/footer';

import {connect} from 'react-redux'

class Main extends React.Component{
	render(){
		return(
			<div>
<Menu cartItemsNumber={this.props.totalQt} />
{this.props.children}
<Footer />
</div>
			
			);
	}
}
function mapStateToProps(state){
	return{
	totalQt:state.cart.totalQt	
	}
}
export default connect (mapStateToProps) (Main);