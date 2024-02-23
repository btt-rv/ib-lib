import React from "react";
import { List } from "@mui/material";
import SubjectListItem from "./subjectListItem";
import * as data from "../data.json"

type pastPapersDBRecord = {
    subjectID:string,
    subjectTitle:string,
    sl:object
    hl:object,
}

function SubjectList() {

    const pastPapersDB:pastPapersDBRecord[] = JSON.parse(JSON.stringify(data)).default;
    
    return (
        <nav aria-label="">
            <List>
                {pastPapersDB.map((subject, i) => (<SubjectListItem subjectID={subject.subjectID} subjectTitle={subject.subjectTitle}/>))}
            </List>
        </nav> 
    )
}

export default SubjectList