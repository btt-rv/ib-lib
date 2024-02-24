import React from "react";
import { ListItem, ListItemText, ListItemButton, Collapse, List } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import PastPapersListItem from "./pastPapersListItem";
import SubjectListItem from "./subjectListItem";

type subjectListDropDownMenuPropsType = {
    subjectGroupTitle:string
    subjectGroup:pastPapersDBRecord[]
}

type pastPapersDBRecord = {
    subjectID:string
    subjectTitle:string
    sl:paperSet[]
    hl:paperSet[]
}

type paperSet = {
    paperTitle:string
    questionPaper:string
    markscheme:string
}

function SubjectListDropDownMenu(props:subjectListDropDownMenuPropsType) {
    const [open, setOpen] = React.useState(false)

     function handleClick() {
        setOpen(!open)
    }

    return (
        <ListItem sx={{display:"block", borderBottom:1, borderColor:"#E0E0E0"}}>
            <ListItem sx={{display:"flex"}}>
                <ListItemText primary={props.subjectGroupTitle} />
                <ListItemButton onClick={handleClick} sx={{flexGrow:0.02}}>
                    {open ? <ExpandLess sx={{margin:"auto"}} /> : <ExpandMore sx={{margin:"auto"}}/>}
                </ListItemButton>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List disablePadding >
                {props.subjectGroup.map((subject, i) => (
                    <SubjectListItem subjectID={subject.subjectID} subjectTitle={subject.subjectTitle}/>
                ))}
                </List>
            </Collapse>
        </ListItem>
    )
}

export default SubjectListDropDownMenu