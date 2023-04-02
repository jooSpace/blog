import React from 'react';

const Modal = (props) => {
    
    return (

        <div className="modal">
            <h4>{props.title[props.titleId]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
}

export default Modal;

