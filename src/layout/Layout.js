import React from 'react';

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }

        this.addCounter = this.addCounter.bind(this);
        this.subtractCounter = this.subtractCounter.bind(this);
    }

    addCounter() {
        var count = this.state.counter;
        count++;
        this.setState({counter:count});
    }

    subtractCounter() {
        var count = this.state.counter;
        count = (count - 1 > 0) ? count - 1 : 0;
        this.setState({ counter: count });
    }

    render() {
        return (
            <div>
                <button className="btn btn-danger" onClick={this.subtractCounter}>
                    <i className="fa fa-minus fa-fw"></i>
                </button>
                <button className="btn btn-success" onClick={this.addCounter}>
                    <i className="fa fa-plus fa-fw"></i>
                </button>
                <hr />
                <p>Counter: {this.state.counter}</p>
            </div>
        )
    }
}

export default Layout;