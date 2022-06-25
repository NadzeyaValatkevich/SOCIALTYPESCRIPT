import React from 'react';
import {ProfileMiddlePropsType} from '../../Profile'
import {Preloader} from "../../../common/preloader/Preloader";
import {ProfileStatus} from './ProfileStatus'

const ProfileInfo = (props: ProfileMiddlePropsType) => {
    if(!props.profile) {
        return <Preloader />
    } else {
        return (
            <div>
                <div className={'descriptionBlock'}>
                    <img src={props.profile.photos.large}/>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>

            </div>
        );
    }
};

export default ProfileInfo;