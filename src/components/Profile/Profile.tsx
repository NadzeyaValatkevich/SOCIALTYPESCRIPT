import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
// import {StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPosts.Container";

// type ProfilePropsType = {
//     store: StoreType
// };

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;