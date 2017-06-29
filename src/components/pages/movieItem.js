import React from 'react';
import {Row,Col,Well,Button} from 'react-bootstrap';

class MovieItem extends React.Component{
render(){
	return(
		<Well>
			<Row>
				<Col>
					<h6>{this.props.title}</h6>
					<p>{this.props.description}</p>
					<h6>{this.props.price}</h6>
					    <Button bsStyle="success">Buy Now</Button>
				</Col>
			</Row>
		</Well>
	)
}

}

export default MovieItem;