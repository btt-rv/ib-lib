import React from "react";
import { ListItem, ListItemButton,  ListItemText} from "@mui/material";
import { Link } from "react-router-dom";

type ListItemProps = {
    subjectID: string
    subjectTitle: string
}

function SubjectListItem(props:ListItemProps) {

    return (
            <ListItem className="subjectList">
                <ListItemText primary={props.subjectTitle}  />
                <Link to={"/past-papers/"+props.subjectID+"-"+"sl"}>
                    <ListItemButton sx={{flexGrow: 0.08}}>
                        <ListItemText primary="SL" sx={{textAlign: "center"}} /> 
                    </ListItemButton>
                </Link>
                <Link to={"/past-papers/"+props.subjectID+"-"+"hl"}>
                    <ListItemButton sx={{flexGrow: 0.08}}>
                        <ListItemText primary="HL" sx={{textAlign: "center"}} /> 
                    </ListItemButton>
                </Link>
            </ListItem>
    )
}

export default SubjectListItem