import React from "react";
import { List } from "@mui/material";
import * as data from "../papers.json"
import PastPapersListItem from "./pastPapersListItem";
import PastPapersListDropDownMenu from "./pastPapersListDropDownMenu";

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

type paperSeries = {
    title:string
    papers:paperSet[]
}

type pastPapersListPropsType = {
    id:string
}

function findPastPapersList(id:string, pastPapersDB:pastPapersDBRecord[]) {

    let pageRecord:pastPapersDBRecord = {subjectID: "", subjectTitle: "", sl: [], hl: []};

    pastPapersDB.forEach(record => {
        if(record.subjectID === id.slice(0, id.length-3)) {
            pageRecord = record;
        }
    });
 
    if(id.slice(id.length-2, id.length) === "sl") {
        return pageRecord.sl
    } else {
        return pageRecord.hl
    }
}

function getSeriesFromTitle(title:string) {
    let spaceCounter = 0;
    for(let i  = 0; i < title.length; i++) {
        if(title.charAt(i) === " ") {
            spaceCounter++
        }
        if(spaceCounter === 2) {
            return title.slice(0, i)
        }
    }
}

function separateBySeries(currentPastPapersList:paperSet[]) {
    let currentPastPapersSeparatedBySeries:paperSeries[] = [];
    let seriesToAdd:paperSeries = {title:"", papers:[]}

    for(let i = 0; i < currentPastPapersList.length; i++) {
        if(i !== 0) {
            if(getSeriesFromTitle(currentPastPapersList[i].paperTitle) === getSeriesFromTitle(currentPastPapersList[i-1].paperTitle)) {
                seriesToAdd.papers.push(currentPastPapersList[i])
                if(i === currentPastPapersList.length-1) {
                    currentPastPapersSeparatedBySeries.push(seriesToAdd)
                }
            } else {
                currentPastPapersSeparatedBySeries.push(seriesToAdd)
                seriesToAdd = {title:"", papers:[]}

                let title = getSeriesFromTitle(currentPastPapersList[i].paperTitle)
                
                seriesToAdd.title = title !== undefined ? title.toString() : "error"
                seriesToAdd.papers.push(currentPastPapersList[i])
            }
        } else {
            let title = getSeriesFromTitle(currentPastPapersList[i].paperTitle)
            
            seriesToAdd.title = title !== undefined ? title.toString() : "error"
            seriesToAdd.papers.push(currentPastPapersList[i])
        }
    }
    
    return currentPastPapersSeparatedBySeries
}


function PastPapersList(props:pastPapersListPropsType) {

    const pastPapersDB:pastPapersDBRecord[] = JSON.parse(JSON.stringify(data)).default[parseInt(props.id.charAt(0))-1]
    const currentPastPapersList:paperSet[] = findPastPapersList(props.id, pastPapersDB)
    const currentPastPapersSeparatedBySeries = separateBySeries(currentPastPapersList)
 
    return (
        <nav aria-label="">
            <List disablePadding >
                {currentPastPapersSeparatedBySeries.map((paperSeries, i) => (
                    <PastPapersListDropDownMenu currentPaperSeries={paperSeries}/>
                ))}
            </List>
        </nav> 
    )
}

export default PastPapersList