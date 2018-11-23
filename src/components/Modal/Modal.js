import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import Loader from 'react-loader-spinner'



let modalRoot = document.getElementById("modal")
if (!modalRoot) {
  modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal')
  document.body.appendChild(modalRoot)
}


const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '160px',
    width: '160px',
    transform: 'translate(-50%,-50%)',
    borderRadius: '50%'
}

const spinner = (
    <div style={modalStyle} className="modal">
        <Loader height="150" width="150" type="Oval" color="#007BFF"/>
    </div>
)

export default class Modal extends Component {

    constructor(){
        super();
        this.el = document.createElement('div');
        
    }

    componentDidMount(){
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount(){
        modalRoot.removeChild(this.el);
    }

    render(){
        return ReactDOM.createPortal(spinner,this.el);
    }
}