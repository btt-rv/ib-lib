import React from "react";
import { Paper, List } from "@mui/material";
import * as data from "../data.json"
import { useParams } from "react-router";

function PastPapersPage() {
    const id = useParams().toString();
    const pastPapersDB = JSON.parse(JSON.stringify(data));

    return (
        <Paper>
            <nav aria-label="">
                <List>

                </List>
            </nav> 
        </Paper>
    )
}

export default PastPapersPage