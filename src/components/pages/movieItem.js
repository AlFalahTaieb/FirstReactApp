import React from 'react';
import {Image,Row,Col,Well,Button} from 'react-bootstrap';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {addToCart,updateCart} from '../../actions/cartActions'

class MovieItem extends React.Component{

	handleCart(){
		const movie =[...this.props.cart,{
			_id:this.props._id,
			title:this.props.title,
			description:this.props.description,
			image:this.props.image,
			price:this.props.price,
			quantity:1
		}]
				//Voir si la carte est vide ou pas

				if(this.props.cart.length>0){
					//Cart non vide
					let _id=this.props._id;
					let cartIndex=this.props.cart.findIndex(function(cart){
						return cart._id ===_id
					})
					//if retourne -1 c'est à dire pas du même ID 
					if (cartIndex ===-1){
						this.props.addToCart(movie);
					}
					else{
						// Juste mise à jour de la quantity 
						this.props.updateCart(_id,1,this.props.cart,this.props.cart)
					}


				}else{
					//Cart est vide 
					this.props.addToCart(movie)
				}

		
	}
render(){
	return(
		<Well>
			<Row>
				<Col xs={12} sm={4}>
					<Image src={this.props.images}
					responsive />
					</Col>
					<Col xs={6} sm={8}>
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
		addToCart:addToCart,
		updateCart:updateCart
	},dispatch)
}


export default connect(mapStateToProps,mapDispatchToPropos)(MovieItem);