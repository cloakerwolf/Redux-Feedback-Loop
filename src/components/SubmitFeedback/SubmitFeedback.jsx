import React, { Component } from 'react';


class SubmitFeedback extends Component {
    render() {
        return (
            <>
                <h1>Thank You!</h1>
                <button className="btn btn-secondary btn-lg checkoutBtn" onClick={() => this.props.history.push('/')}>Leave New Feedback</button>
                <button className="btn btn-secondary btn-lg checkoutBtn" onClick={() => this.props.history.push('/Admin')}>Admin</button>
            </>


        )

    }
}




export default SubmitFeedback;