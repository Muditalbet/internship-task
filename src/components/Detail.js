import React ,{Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { selectUser } from '../actions/Action'

class Detail extends Component{

    createListItems(){
        // var flag = false
        return this.props.content.map((element)=>{
            if(element.id == this.props.match.params.id) {
                return (
                    <div key={element.id}>
                        {console.log("check: ", element)}
                        <h1>{element.name}</h1>
                        <h4>{element.price}</h4>
                        <h6>{element.description}</h6>
                        <br />
                        <span onClick={() => this.props.selectUser(element)}>Add to cart</span>
                    </div>
                )
            }
        })
    }

    render(){
        return(
            <div>
                {this.createListItems()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        content: state.content
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect (mapStateToProps, matchDispatchToProps)(Detail)