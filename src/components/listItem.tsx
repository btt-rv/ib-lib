import React from "react";

type ListItemProps = {
    subjectTitle: string
}

function ListItem(props:ListItemProps) {

    return (
        <div>
            <h2>{props.subjectTitle}</h2>
        </div>
    )
}

export default ListItem