import React from 'react';
import { observer, inject } from 'mobx-react'

@inject('User') @observer
class Profile extends React.Component {

    render(){

        return <div>
            <img  />
        </div>
    }
}

export default Profile;