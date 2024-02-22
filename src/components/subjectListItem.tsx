import React from "react";
import { ListItem, ListItemButton,  ListItemText} from "@mui/material";

type ListItemProps = {
    subjectTitle: string
}

function SubjectListItem(props:ListItemProps) {

    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemText primary={props.subjectTitle} />
            </ListItemButton>
        </ListItem>
    )
}

export default SubjectListItem