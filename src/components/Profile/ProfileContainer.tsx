import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {AppStateType} from "@/redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-Reducer";



 export class ProfileMiddleContainer extends React.Component<ProfilePropsType, {}> {

     componentDidMount() {
         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
             .then(response => {
                 //set-аем в reducer
                 this.props.setUserProfile(response.data);
             })
     }

     render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    };
};

type MapStatePropsType = {
    profile: any
};

type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void
};

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType;

 const mapStateToProps = (state: AppStateType): MapStatePropsType => {
     return {
         profile: state.profilePage.profile
     }
 };

 export const ProfileContainer = connect(mapStateToProps, {
     setUserProfile
})(ProfileMiddleContainer)
