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
                {/*<div>*/}
                {/*    <img src={'https://sun9-44.userapi.com/iKDsFT2dSEKdVaIpGNqFlmyUljV1sgi3Was65A/Nm37RlbsoFU.jpg'}*/}
                {/*         alt={'nature'}/>*/}
                {/*</div>*/}
                <div className={'descriptionBlock'}>
                    <img src={props.profile.photos.large}/>
                    <ProfileStatus status={'Hello my friends!'}/>
                </div>

            </div>
        );
    }
};

export default ProfileInfo;