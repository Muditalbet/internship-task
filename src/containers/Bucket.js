import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../CSS/Cart.css'

class Bucket extends Component{
    
    createListItems(){
        if(!this.props.bucket) return (
            <div>Nothing selected...</div>
        )
        return this.props.bucket.map((element)=>{
            return(
                <div key = {element.id} className='cart-card'>
                    <Link to={'/about/'+element.id}>
                        <div className='image'>
                            <img src={require('../Pictures/'+element.photo).default}></img>
                        </div>
                        <div className='item-content'>
                            <span>{element.name}</span>
                            <h6>{element.price}</h6>
                        </div>
                    </Link>
                </div>
            )
        })
    }
    totalPrice(){
        if(!this.props.bucket) return (
            <h4>0</h4>
        )
        var cost = 0
        this.props.bucket.map((element)=>{
            cost = cost + element.price 
        })
        return cost
    }
    
    render(){
        if(!this.props.bucket){
            return( <div className='select-item'>Your cart is empty!!!</div> )
        }
        return(
            <div className='cart-main'>
                <span>Total items: {this.props.bucket.length}</span>
                {this.createListItems()}
                <hr />
                <div className='total'>
                    Net total 
                    <div className='value'> {this.totalPrice()} </div>
                    Rs
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        bucket: state.bucket
    }
}


export default connect(mapStateToProps)(Bucket);