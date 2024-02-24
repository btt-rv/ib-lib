import React from "react";
import { ListItem, ListItemText, ListItemButton, Collapse, List } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import PastPapersListItem from "./pastPapersListItem";

type PastPapersListDropDownMenuPropsType = {
    currentPaperSeries:paperSeries
}

type paperSeries = {
    title:string
    papers:paperSet[]
}

type paperSet = {
    paperTitle:string
    questionPaper:string
    markscheme:string
}

function PastPapersListDropDownMenu(props:PastPapersListDropDownMenuPropsType) {
    const [open, setOpen] = React.useState(false)

     function handleClick() {
        setOpen(!open)
    }

    return (
        <ListItem sx={{display:"block", borderBottom:1, borderColor:"#E0E0E0"}}>
            <ListItem sx={{display:"flex"}}>
                <ListItemText primary={props.currentPaperSeries.title} />
                <ListItemButton onClick={handleClick} sx={{flexGrow:0.02}}>
                    {open ? <ExpandLess sx={{margin:"auto"}} /> : <ExpandMore sx={{margin:"auto"}}/>}
                </ListItemButton>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List disablePadding >
                {props.currentPaperSeries.papers.map((paperSet, i) => (
                    <PastPapersListItem paperSetTitle={paperSet.paperTitle} markscheme={paperSet.markscheme} questionPaper={paperSet.questionPaper} />
                ))}
                </List>
            </Collapse>
        </ListItem>
    )
}

export default PastPapersListDropDownMenu