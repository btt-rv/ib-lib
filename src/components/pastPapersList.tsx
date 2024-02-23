import React from "react";
import { List } from "@mui/material";
import * as data from "../data.json"
import PastPapersListItem from "./pastPapersListItem";

type pastPapersDBRecord = {
    subjectID:string,
    subjectTitle:string,
    sl:paperSeriesType[]
    hl:paperSeriesType[],
}

type paperSeriesType = {
    series:string,
    questionPaper:string,
    markscheme:string
}

type pastPapersListPropsType = {
    id:string,
}

function findPastPapersList(id:string, pastPapersDB:pastPapersDBRecord[]) {

    let pageRecord:pastPapersDBRecord = {subjectID: "", subjectTitle: "", sl: [], hl: []};

    pastPapersDB.forEach(record => {
        if(record.subjectID === id.slice(0, id.length-3)) {
            pageRecord = record;
        }
    });
 
    if(id.slice(0, id.length-4) === "sl") {
        return pageRecord.sl
    } else {
        return pageRecord.hl
    }
}


function PastPapersList(props:pastPapersListPropsType) {

    const pastPapersDB:pastPapersDBRecord[] = JSON.parse(JSON.stringify(data)).default;
    const currentPastPapersList:paperSeriesType[] = findPastPapersList(props.id, pastPapersDB)

    return (
        <nav aria-label="">
            <List disablePadding>
                {currentPastPapersList.map((paperSeries, i) => (<PastPapersListItem seriesTitle={paperSeries.series} questionPaper={paperSeries.questionPaper} markscheme={paperSeries.markscheme}/>))}
            </List>
        </nav> 
    )
}

export default PastPapersList