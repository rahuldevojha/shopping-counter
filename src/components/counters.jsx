import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {

    render() {
        const {onDelete, onReset, onIncrement, onDecrement, counters} = this.props;
        return (
            <div>
                {counters.map(counter => 
                <Counter 
                    key={counter.id} 
                    onDelete={onDelete} 
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    counter={counter}
                />)}
                <button 
                    onClick={onReset}
                    className="reset btn-dark m-2"
                > Reset </button>
            </div>  
        );
    }
}

export default Counters; 