import React from "react";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "@mui/material";

type pastPapersListItemType = {
    paperSetTitle:string
    questionPaper:string
    markscheme:string
}

function PastPapersListItem(props:pastPapersListItemType) {
    return (
        <nav aria-label="">
            <ListItem className="subjectList" sx={{backgroundColor:"#F2F2F2", borderBottom:1, borderColor:"#E0E0E0"}}>
                <ListItemText primary={props.paperSetTitle}  />
                <a href={props.questionPaper} target="external" className="link">
                    <ListItemButton>
                        <ListItemText primary="QP" sx={{textAlign: "center"}} />
                    </ListItemButton>
                </a>
                <a href={props.markscheme} target="external" className="link" >
                    <ListItemButton>
                        <ListItemText primary="MS" sx={{textAlign: "center"}} />
                    </ListItemButton>
                </a>
            </ListItem>
        </nav>
    )
}

export default PastPapersListItem