import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {setUserProfile} from "../../redux/profile-Reducer";

export type ProfileUsersType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
        github: string,
        vk: string,
        facebook: string,
        instagram: string,
        twitter: string,
        website: string,
        youtube: string,
        mainLink: string,
    }
    photos: {
        small: string,
        large: string,
    }
};

type PathParamsType = {
    userId: string,
};

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType, {}> {

     componentDidMount() {

         let userId = this.props.match.params.userId;
         // if(!userId) {
         //     userId = 2;
         // }
         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
             .then(response => {
                 //set-аем в reducer
                 this.props.setUserProfile(response.data);
             })
     }

     render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };
};

type MapStatePropsType = {
    profile: ProfileUsersType | null;
};

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileUsersType | null) => void
};

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType;

 const mapStateToProps = (state: AppStateType): MapStatePropsType => {
     return {
         profile: state.profilePage.profile
     }
 };
 let WithUrlDataContainerComponent = withRouter(ProfileContainer);
 export default connect(mapStateToProps, {
     setUserProfile
})(WithUrlDataContainerComponent )
