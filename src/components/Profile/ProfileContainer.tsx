import React from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/profile-Reducer";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


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

         let userId = +this.props.match.params.userId;
         if(!userId) {
             userId = 2;
         }
         this.props.getUserProfile(userId)
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
    getUserProfile: (userId: number) => void
};

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType;


 const mapStateToProps = (state: AppStateType): MapStatePropsType => {
     return {
         profile: state.profilePage.profile,
     }
 };

 export default compose(
     connect(mapStateToProps, {getUserProfile}),
     withRouter,
     withAuthRedirect
 )
 (ProfileContainer)
