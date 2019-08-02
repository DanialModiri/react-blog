import React from 'react';
import { Link } from 'react-router-dom'

export const Comment = ({ body, user, date, article }) => {
    date = new Date(date);
    return <div style={{ marginTop: 8 }}>
        <div style={{ display: 'flex' }}>
            <div style={{ width: 125, flexGrow: 1 }}>
                <img style={{ display: 'block', height: 45, width: 45, objectFit: 'cover' }} src={user.avatar} />
                <b style={{ display: 'block' }}>{user.username}</b>
            </div>
            <div>
                {article && <Link to={`/article/${article._id}`}>{article.title}</Link>}
            </div>
        </div>

        <div>
            <p style={{ margin: 0 }}>
                {body}
            </p>
            <div>
                <span style={{ color: '#aaa', fontSize: 12 }}>
                    {`${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`}
                </span>
            </div>
        </div>
    </div>;
};
