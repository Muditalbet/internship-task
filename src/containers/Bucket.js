import React, {Component} from 'react'
import {connect} from 'react-redux'

class Bucket extends Component{
    
    createListItems(){
        console.log("testing bucket: ", this.props.bucket)
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
    
    render(){
        if(!this.props.bucket){
            return( <h4>Select user...</h4> )
        }
        // return(
        //     <div>
        //         <h2>{this.props.bucket.name}</h2>
        //         <br />
        //         <h2>{this.props.bucket.description}</h2>
        //     </div>
        // )
        return(
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return{
        bucket: state.bucket
    }
}


export default connect(mapStateToProps)(Bucket);