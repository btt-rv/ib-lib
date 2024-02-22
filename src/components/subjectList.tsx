import React from "react";
import { List } from "@mui/material";
import SubjectListItem from "./subjectListItem";

type SubjectListProps = {
    subjects:string[]
}
function SubjectList(props:SubjectListProps) {
    return (
        <nav aria-label="">
            <List>
                {props.subjects.map((subject, i) =>
                    <SubjectListItem subjectTitle={subject}/>
                )}
            </List>
        </nav> 
    )
}

export default SubjectList