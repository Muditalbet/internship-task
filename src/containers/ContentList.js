import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectUser} from '../actions/Action'
import {Link} from 'react-router-dom'

class ContentList extends Component{
    
    createListItems(){
        return this.props.content.map((element)=>{
            return (
                <div key={element.id}>
                    <Link to={"/about/" + element.id}>
                        <li >{element.name}</li>
                        <br></br>
                        {element.price} Rs
                        <br />
                        {/* <span onClick={() => this.props.selectUser(element)}>Add To Cart</span> */}
                        <br></br>

                        <hr />
                        <br></br>
                    </Link>
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