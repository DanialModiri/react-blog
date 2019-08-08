import React from 'react';
import { observer, inject } from 'mobx-react'
import './Profile.css'
import { Comment } from './Comment'
import RedirectIfAuth from '../components/RedirectIfAuth';

@inject('User') @inject('Profile') @observer
class Profile extends React.Component {

    logout = () => {
        this.props.User && this.props.User.logout();
    }

    render() {
        const user = this.props.User.user || {};
        const Profile = this.props.Profile || {};

        return <RedirectIfAuth need={true}>
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
                <div className="profile-footer">
                    <button className="btn-close" onClick={this.logout}>
                        خروج
                    </button>
                </div>

            </div>
            <div className="card">
                <h4>نظرات</h4>
                {(Profile.comments || []).map(item => <Comment {...item} />)}
            </div>
        </RedirectIfAuth>
    }
}

export default Profile;