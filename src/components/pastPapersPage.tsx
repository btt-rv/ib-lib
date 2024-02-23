import React from "react";
import { Paper, List } from "@mui/material";
import * as data from "../data.json"
import { useParams } from "react-router";
import PastPapersList from "./pastPapersList";
import AppNavBar from "./appNavBar";

function PastPapersPage() {
    const id = useParams()["id"];
    const pastPapersDB = JSON.parse(JSON.stringify(data)).default;

    return (
        <Paper>
            <AppNavBar/>
            <PastPapersList id={id !== undefined ? id.toString() : "error"}/>
        </Paper>
    )
}

export default PastPapersPage