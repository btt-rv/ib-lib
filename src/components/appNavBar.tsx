import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function AppNavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                >
                    IB LIBRARY
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default AppNavBar