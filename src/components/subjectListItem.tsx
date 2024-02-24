import React from "react";
import { ListItem, ListItemButton,  ListItemText} from "@mui/material";
import { Link } from "react-router-dom";

type ListItemProps = {
    subjectID: string
    subjectTitle: string
}

function SubjectListItem(props:ListItemProps) {

    return (
            <ListItem className="subjectList" sx={{backgroundColor:"#F2F2F2", borderBottom:1, borderColor:"#E0E0E0"}}>
                <ListItemText primary={props.subjectTitle}  />
                <Link to={"/past-papers/"+props.subjectID+"-"+"sl"} className="link">
                    <ListItemButton>
                        <ListItemText primary="SL" sx={{textAlign: "center"}} /> 
                    </ListItemButton>
                </Link>
                <Link to={"/past-papers/"+props.subjectID+"-"+"hl"} className="link">
                    <ListItemButton>
                        <ListItemText primary="HL" sx={{textAlign: "center"}} /> 
                    </ListItemButton>
                </Link>
            </ListItem>
    )
}

export default SubjectListItem