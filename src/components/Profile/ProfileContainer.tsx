import React from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-Reducer";
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
             userId =  23339
             // userId = this.props.authorixedUserId;
         }
         this.props.getUserProfile(userId);
         this.props.getStatus(userId);
     }


     render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        );
    };
};

type MapStatePropsType = {
    profile: ProfileUsersType | null;
    status: string,
    authorixedUserId: string | null,
    isAuth: boolean
};

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
};

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType;


 const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
         profile: state.profilePage.profile,
         status: state.profilePage.status,
         authorixedUserId: state.auth.id,
         isAuth: state.auth.isAuth

 });

 export default compose<React.ComponentType>(
     connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
     withRouter,
     // withAuthRedirect
 )
 (ProfileContainer)
