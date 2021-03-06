import React, {Component} from 'react';
//import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from  'reactstrap';
import Dishdetails from './DishdetailComponent.js';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
        console.log('constructor');
    }

    onDishSelect(dish){
        this.setState({selectedDish:dish});
    }

    renderDish(dish){
        if(dish!=null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    render(){
        const menu = this.props.dishes.map((dish=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                          onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        }));
        console.log('render');
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <Dishdetails dish={this.state.selectedDish} />
            </div>
        );
    }
}
export default Menu;