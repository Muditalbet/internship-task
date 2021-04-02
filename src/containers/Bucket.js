import React, {Component} from 'react'
import {connect} from 'react-redux'

class Bucket extends Component{
    
    createListItems(){
        if(!this.props.bucket) return (
            <h4>Nothing selected...</h4>
        )
        return this.props.bucket.map((element)=>{
            return(
                <div key = {element.id}>
                    <h4>{element.name}: </h4>
                    <h7>{element.description}</h7>
                    <br />
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
            return( <h4>Select user...</h4> )
        }
        return(
            <div>
                total items: {this.props.bucket.length}
                <ul>
                    {this.createListItems()}
                </ul>
                total price: {this.totalPrice()}
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