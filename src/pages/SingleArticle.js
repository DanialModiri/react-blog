import React from 'react';
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import './SingleArticle.css'

const Comment = ({ body, user }) => {
    return <div className="comment">
        <div className="comment-header">
            <img src={user.avatar} />
        </div>
        <div>
            {body}
        </div>
    </div>
}

@withRouter @inject('SingleArticle') @observer
class SingleArticle extends React.Component {

    componentDidMount() {
        console.log(this.props.match.params)
        this.props.SingleArticle.setCurrentArticle(this.props.match.params.id);
    }

    render() {
        const { selectedArticle, comments } = this.props.SingleArticle;

        return <div style={{ padding: 8 }}>
            <div>
                <img src={selectedArticle && selectedArticle.image}
                    style={{ objectFit: 'cover', width: 250, float: 'left' }} />
                <div >
                    {selectedArticle && selectedArticle.body}
                </div>
            </div>

            {(comments || []).map(comment => <Comment {...comment} />)}
        </div>
    }
}


export default SingleArticle;