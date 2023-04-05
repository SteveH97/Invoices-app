import { useDispatch, useSelector } from "react-redux";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Logo, Moon, Sun } from "../../assets/index.js"
import Img from '../../assets/image-avatar.jpg'
import './Navbar.css'
import { changeMode } from "../../store/mode-slice.js";

export const Navbar = () => {

    const dispatch = useDispatch();
    const mode = useSelector((state)=> state.mode.mode);
    const isNonMobileScreens = useMediaQuery("(min-width:1024px)")
    const theme = useTheme();

  return (
    <Box
        display="flex"
        flexDirection={isNonMobileScreens ? "column" : "row"}
        width={isNonMobileScreens ? "103px" : "100%"}
        height={isNonMobileScreens ? "100vh" : "80px"}
        backgroundColor={theme.palette.navbar}
        justifyContent="space-between"
    >
        <Box
            width={isNonMobileScreens ? "103px" : "80px"}
            height={isNonMobileScreens ? "103px" : "80px"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor={theme.palette.multi.purple}
        >
            <Logo/>
        </Box>

        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection={isNonMobileScreens ? "column" : "row"}
            marginBottom={isNonMobileScreens ? "24px" : "0"}
            marginRight={isNonMobileScreens ? "0" : "32px"}
            height={isNonMobileScreens ? "117px" : "80px"}
            width={isNonMobileScreens ? "100%" : "116px"}
        >
            {
                mode === "dark" ?
                <>
                    <Moon
                        onClick={()=>dispatch(changeMode())}
                    />
                </>
                :
                <>
                    <Sun
                        onClick={()=>dispatch(changeMode())}
                    />
                </>
            }

            <hr/>

            <img src={Img} alt="is the pic"/>

        </Box>
        
    </Box>
  )
}

export default Navbar;