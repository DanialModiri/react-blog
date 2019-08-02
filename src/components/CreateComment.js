import React from 'react';
import './CreateComment.css'
import User from '../stores/user'

class CreateComment extends React.Component {

    state = {
        body: ''
    }

    handlleInputChange = (e) => {
        this.setState({ body: e.target.value });
    }

    insertComment = (e) => {
        e.preventDefault();
        User.insertComment(this.state.body);
    }

    render() {

        return <form onSubmit={this.insertComment}>
            <textarea
                className="comment"
                name="body"
                rows={5}
                onChange={this.handlleInputChange}
                placeholder="نظر خود را اینجا بنویسید"
                value={this.state.body} />
            <button className="insert-btn">ثبت</button>
        </form>
    }
}

export default CreateComment;