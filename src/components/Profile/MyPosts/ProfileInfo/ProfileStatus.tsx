import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string,
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props:ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);


    const activeEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        props.updateStatus(status);
        setEditMode(false);

    };

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activeEditMode}>{props.status || "-----"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} value={status} autoFocus={true}/>
                </div>
            }
        </div>
    );

};

