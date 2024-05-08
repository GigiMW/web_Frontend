import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { colors } from "../../styles/theme";
import { useState } from "react";
import { clamp } from "./clamp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function IncDec(){
const clampV=clamp(1,10);
 const [value,setValue]=useState(1);
    return(
        <Box display="flex">
            <IconButton
            sx={{
                borderRadius:0,
                background:`${colors.secondary}`
            }}
            onClick={()=>setValue(clampV(value-1))}>
                <RemoveIcon/>
            </IconButton>
                <Typography
                variant="h6"
                sx={{
                    border:`1px solid ${colors.secondary}`,
                    pt:2

                }}
                >
                    {value}
                </Typography>
                <IconButton
            sx={{
                borderRadius:0,
                background:`${colors.secondary}`
            }}
            onClick={()=>setValue(clampV(value+1))}>
                <AddIcon/>
            </IconButton>
        </Box>
    )
}