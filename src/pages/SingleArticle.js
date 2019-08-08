import React from 'react';
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import './SingleArticle.css'
import { Comment } from './Comment';
import CreateComment from '../components/CreateComment';
import DisplayIfAuth from '../components/DisplayIfAuth';

const comments_sort = [
    { label: 'تاریخ', value: 'date' },
    { label: 'تعداد لایک', value: 'like' }
]

const warning = 'کاربران عزیز توجه داشته باشید کامنت های که شامل عبارات رکیک و توهین آمیز باشد به ثبت نخواهند رسید'

@withRouter @inject('SingleArticle') @inject('User') @observer
class SingleArticle extends React.Component {

    componentDidMount() {
        console.log(this.props.match.params)
        this.props.SingleArticle.setCurrentArticle(this.props.match.params.id);
    }

    render() {
        let { selectedArticle, comments, addToMyFavorite } = this.props.SingleArticle;
        if (!selectedArticle)
            selectedArticle = {}
        const user = this.props.User.user || {};
        const date = new Date(selectedArticle.date);
        if(user.favoritesArticles && selectedArticle)
            console.log(user.favoritesArticles.includes(selectedArticle._id))
        console.log(selectedArticle._id,JSON.stringify(user.favoritesArticles))
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
                <DisplayIfAuth>
                    {user && (user.favoritesArticles || []).includes(selectedArticle._id) ? <span style={{ color: 'darkgreen', fontSize: 18 }}>مورد علاقه ♥</span> :
                        <button
                            onClick={() => addToMyFavorite && addToMyFavorite(selectedArticle._id)}
                            style={{
                                cursor: 'pointer',
                                margin: '8px',
                                outline: 'none',
                                color: '#fff',
                                backgroundColor: 'rgb(255, 102, 0)',
                                border: '0',
                                fontFamily: 'IRANSans',
                                padding: '4px 8px',
                                borderRadius: 16
                            }}>
                            اضافه کردن به لیست مورد علاقه
                                </button>}

                </DisplayIfAuth>

                <div style={{ display: 'flex', }}>
                    <span style={{ color: '#aaa', flexGrow: 1, fontSize: 12 }}>
                        {`${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`}
                    </span>
                    <span style={{ color: '#aaa', fontSize: 12 }}>
                        {selectedArticle.views}
                    </span>
                </div>
            </div>
            <DisplayIfAuth>
                <h4 style={{ fontSize: 21, margin: '8px 4px' }}>ثبت نظر</h4>
                <div className="card">
                    <CreateComment />
                </div>
                <span style={{ color: 'red', fontSize: 12 }}>{warning}</span>
            </DisplayIfAuth>

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