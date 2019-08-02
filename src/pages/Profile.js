import React from 'react';
import { observer, inject } from 'mobx-react'
import './Profile.css'
import {Comment} from './Comment'

@inject('User') @inject('Profile') @observer
class Profile extends React.Component {
    render() {

        const user = this.props.User.user || {};
        const Profile = this.props.Profile || {};
        console.log(Profile)
        return <React.Fragment>
            <div className="card" >
                <div style={{ display: 'flex' }}>
                    <img src={user.avatar}
                        style={{
                            height: 120,
                            width: 120,
                            objectFit: 'cover'
                        }} />
                    <div style={{ marginRight: 8 }}>
                        <h4 >
                            {user.username}
                        </h4>
                        <div className="details">
                            <div className="spec">
                                <span>نام</span>
                                {user.first_name}
                            </div>
                            <div className="spec">
                                <span>کشور</span>
                                {user.country}
                            </div>
                            <div className="spec">
                                <span>شهر</span>
                                {user.city}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <h4>نظرات</h4>
                {(Profile.comments || []).map(item => <Comment {...item} />)}
            </div>
        </React.Fragment>


    }
}

export default Profile;