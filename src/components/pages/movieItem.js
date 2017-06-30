import React from 'react';
import {Row,Col,Well,Button} from 'react-bootstrap';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {addToCart} from '../../actions/cartActions'

class MovieItem extends React.Component{

	handleCart(){
		const movie =[...this.props.cart,{
			id:this.props.id,
			title:this.props.title,
			description:this.props.description,
			price:this.props.price
		}]
		this.props.addToCart(movie)
	}
render(){
	return(
		<Well>
			<Row>
				<Col>
					<h6>{this.props.title}</h6>
					<p>{this.props.description}</p>
					<h6>{this.props.price}</h6>
					    <Button onClick={this.handleCart.bind(this)}		bsStyle="success">Buy Now</Button>
				</Col>
			</Row>
		</Well>
	)
}

}
function mapStateToProps(state){
	return{
		cart:state.cart.cart
	}
}

function mapDispatchToPropos(dispatch){
	return bindActionCreators({
		addToCart:addToCart
	},dispatch)
}


export default connect(mapStateToProps,mapDispatchToPropos)(MovieItem);