import React from "react";
import { Paper, List } from "@mui/material";
import { useParams } from "react-router";
import PastPapersList from "./pastPapersList";
import AppNavBar from "./appNavBar";

function PastPapersPage() {
    const id = useParams()["id"];

    return (
        <Paper>
            <AppNavBar/>
            <PastPapersList id={id !== undefined ? id.toString() : "error"}/>
        </Paper>
    )
}

export default PastPapersPage