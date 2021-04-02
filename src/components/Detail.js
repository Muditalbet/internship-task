import React ,{Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { selectUser } from '../actions/Action'
import '../CSS/About.css'
class Detail extends Component{

    createListItems(){
        return this.props.content.map((element)=>{
            if(element.id == this.props.match.params.id) {
                return (
                    <div className='main-about' key={element.id}>
                        <div className='image'>
                            <img src={require('../Pictures/'+ element.photo).default} />
                        </div>
                        <div className='content'>
                            <h1>{element.name}</h1>
                            <h4>{element.price} Rs</h4>
                            <span onClick={() => this.props.selectUser(element)}>Add to cart</span>
                            <h6>{element.description}</h6>
                        </div>
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