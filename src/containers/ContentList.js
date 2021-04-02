import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectUser} from '../actions/Action'
import {Link} from 'react-router-dom'
import '../CSS/Items.css'

class ContentList extends Component{
    
    createListItems(){
        return this.props.content.map((element)=>{
            return (
                <div key={element.id} className='card'>
                    <Link to={"/about/" + element.id}>
                        <div className="image">
                            <img src = {require('../Pictures/'+element.photo).default}></img>
                        </div>
                        <div className='item-content'>
                            <span >{element.name}</span>
                            <br></br>
                            <h6>{element.price} Rs</h6>
                        </div>
                    </Link>
                </div>
            );
        })
    }
    
    render(){
        return(
            <div className="main-home">
                {/* <ul>
                    {this.createListItems()}
                </ul> */}
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

export default connect(mapStateToProps, matchDispatchToProps)(ContentList);