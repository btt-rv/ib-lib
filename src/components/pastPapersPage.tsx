import React from "react";
import { Paper, List } from "@mui/material";
import PastPapersListItem from "./pastPapersListItem";

type pastPapersPageProps = {
    subject:string
}

type pastPapersContainer = {
    questionPaperLink:string
    markScheme:string
}

function PastPapersPage(props:pastPapersPageProps) {
    let pastPapers:pastPapersContainer[] = []

    return (
        <Paper>
            <nav aria-label="">
                <List>
                    {pastPapers.map((subject, i) =>
                        <PastPapersListItem/>
                    )}
                </List>
            </nav> 
        </Paper>
    )
}

export default PastPapersPage