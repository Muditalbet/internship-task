import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectUser} from '../actions/Action'

class ContentList extends Component{
    
    createListItems(){
        return this.props.content.map((element)=>{
            return (
                <div key={element.id}>
                <li onClick={() => this.props.selectUser(element)}>{element.name}</li>
                <br></br>
                {element.description}
                <br></br>

                <hr />
                <br></br>
                </div>
            );
        })
    }
    
    render(){
        return(
            <ul>
                {this.createListItems()}
            </ul>
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

export default connect(mapStateToProps, matchDispatchToProps)(ContentList);