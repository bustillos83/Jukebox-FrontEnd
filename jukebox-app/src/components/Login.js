import React, { Component } from "react";
import Modal from './Modal'
import "./Modal.css"

class Login extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         show: false
    //     };
        
    // }

    // showModal = (e) => {
    //     this.setState({
    //         show: !this.state.show
    //     })
    // }

  render() {
    return (
      <>
      {/* <button onClick={(e) => this.showModal()}>
            Login</button>
        <Modal show={this.state.show}> */}
            <form className="login-form">
                <label>Username/email:</label>
                <input type="text"/>
                <label>Password:</label>
                <input type="text"/>
                <input type="submit" value="Submit" 
                onClick={(e) => {this.showModal(e)}}
                />
            </form>
        {/* </Modal> */}
      </>
    );
  }
}

export default Login;
