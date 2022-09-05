import React from 'react';
import {ProfileMiddlePropsType} from '../../Profile'
import {Preloader} from "../../../common/preloader/Preloader";
import {ProfileStatus} from './ProfileStatus'

const ProfileInfo = ({profile, status, updateStatus}: ProfileMiddlePropsType) => {
    if(!profile) {
        return <Preloader />
    } else {
        return (
            <div>
                <div className={'descriptionBlock'}>
                    <img src={profile.photos.large}/>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                </div>

            </div>
        );
    }
};

export default ProfileInfo;