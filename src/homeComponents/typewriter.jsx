import React, {Component} from 'react';
import Typewriter from "typewriter-effect";
import './style.css'
class TypeWriterC extends Component {
    state = {

    }
    render() {
        return (
            <div className="type display-4">
                <span className="badge badge-light">
                <Typewriter
                    options={{
                        strings: ['Graph Algorithms', 'Sorting Algorithms',"8 Queen","Binary Search","Convex Hull","Sudoku"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
            </div>
        );
    }
}

export default TypeWriterC;