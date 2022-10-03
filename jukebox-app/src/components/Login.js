import React, { Component } from "react";
import Modal from './Modal'
import "./Modal.css"

class Login extends Component {
    constructor(){
        super()
        this.state = {
            show: false
        };
        
    }

    showModal = (e) => {
        this.setState({
            show: !this.state.show
        })
    }

    // onClose = (e) => {
    //     this.props.onClose && this.props.onClose(e)
    // }

  render() {
    return (
      <>
        <Modal show={this.state.show}>
            <form className="login-form">
                <label>Username/email:</label>
                <input type="text"/>
                <label>Password:</label>
                <input type="text"/>
                <input type="submit" value="Submit" 
                onClick={(e) => {this.showModal(e)}}
                />
            </form>
        </Modal>
        <button onClick={(e) => this.showModal()}>
            Login</button>
      </>
    );
  }
}

export default Login;
