import React from "react";
import { List } from "@mui/material";
import SubjectListItem from "./subjectListItem";
import * as data from "../papers.json"
import SubjectListDropDownMenu from "./subjectListDropDownMenu";

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

function SubjectList() {

    const pastPapersDB:pastPapersDBRecord[][] = JSON.parse(JSON.stringify(data)).default;
    const subjectGroupTitles:string[] = ["Group 1 - Studies in Language and Literature", "Group 2 - Language Acquisition", "Group 3 - Individuals and Societies", "Group 4 - Sciences", "Group 5 - Mathematics", "Group 6 - The Arts"] 
    
    return (
        <nav aria-label="">
            <List>
                {pastPapersDB.map((subjectGroups, i) => (
                    <SubjectListDropDownMenu subjectGroup={subjectGroups} subjectGroupTitle={subjectGroupTitles[i]} />
                ))}
            </List>
        </nav> 
    )
}

export default SubjectList