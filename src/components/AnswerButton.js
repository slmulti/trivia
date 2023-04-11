// import React from 'react';
// import { decodeHTML } from '../lib';

// class AnswerButton extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <button
//         onClick={this.props.handleGuess}
//         className='btn btn-outline-primary'
//       >
//         {decodeHTML(this.props.answer)}
//       </button>
//     );
//   }
// }

// export { AnswerButton };
import React from "react";
import { decodeHTML } from "../lib";

class AnswerButton extends React.Component {
    handleClick = () => {
        this.props.onGuess(this.props.answer);
    };

    render() {
        return (
            <button
                onClick={this.handleClick}
                className="btn btn-outline-primary"
            >
                {decodeHTML(this.props.answer)}
            </button>
        );
    }
}

export { AnswerButton };
