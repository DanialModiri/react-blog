import React from 'react';
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import './SingleArticle.css'
import { Comment } from './Comment';
import CreateComment from '../components/CreateComment';

const comments_sort = [
    { label: 'تاریخ', value: 'date' },
    { label: 'تعداد لایک', value: 'like' }
]

@withRouter @inject('SingleArticle') @observer
class SingleArticle extends React.Component {

    componentDidMount() {
        console.log(this.props.match.params)
        this.props.SingleArticle.setCurrentArticle(this.props.match.params.id);
    }

    render() {
        let { selectedArticle, comments } = this.props.SingleArticle;
        if (!selectedArticle)
            selectedArticle = {}
        const date = new Date(selectedArticle.date);
        
        return <React.Fragment>
            <div className="card" style={{ padding: 8 }}>
                <h4 style={{ fontSize: 20 }}>{selectedArticle.title}</h4>
                <div>
                    <img src={selectedArticle && selectedArticle.image}
                        style={{ objectFit: 'cover', width: 250, float: 'left' }} />
                    <div>
                        {selectedArticle && selectedArticle.body}
                    </div>
                </div>

                <div style={{ display: 'flex',  }}>
                    <span style={{ color: '#aaa', flexGrow: 1, fontSize: 12 }}>
                        {`${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`}
                    </span>
                    <span style={{ color: '#aaa', fontSize: 12 }}>
                        {selectedArticle.views}
                    </span>
                </div>
            </div>
            <h4 style={{ fontSize: 21, margin: '8px 4px' }}>ثبت نظر</h4>
            <div className="card">
                
                <CreateComment />
            </div>
            <h4 style={{ fontSize: 21, marginTop: 16 }}>نظرات</h4>

            <div className="card" >
                <div style={{ display: 'flex' }}>
                    {comments_sort.map(sort => <button style={{
                        padding: 0,
                        paddingLeft: 4,
                        width: 120,
                        marginLeft: 5
                    }} key={sort.value} className="insert-btn">
                        {sort.label}
                    </button>)}
                </div>

                {(comments || []).map(comment => <Comment {...comment} />)}
            </div>

        </React.Fragment>
    }
}


export default SingleArticle;