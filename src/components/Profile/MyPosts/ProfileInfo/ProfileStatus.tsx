import React, {useState} from 'react';

type ProfileStatusType = {
    status: string
}

export const ProfileStatus = (props:ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false)

    const activeEditMode = () => {
        setEditMode(!editMode)
    };

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activeEditMode}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onBlur={activeEditMode} value={props.status} autoFocus={true}/>
                </div>
            }
        </div>
    );

};

