import { HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<HStack>
			{/* <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} /> */}
			<IconButton
				borderRadius='50%'
				aria-label={colorMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
				icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
				onClick={toggleColorMode}
			/>
		</HStack>
	);
};

export default ColorModeSwitch;




// import React from "react";
// import { IconButton, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
// import BedtimeIcon from "@mui/icons-material/Bedtime";
// import SunnyIcon from "@mui/icons-material/WbSunny";

// const App = () => {
// 	const [mode, setMode] = React.useState<"light" | "dark">("light");

// 	const theme = React.useMemo(
// 		() => createTheme({ palette: { mode } }),
// 		[mode]
// 	);

//     return (
//         <ThemeProvider theme={theme}>
//             <CssBaseline />
//             <IconButton
//                 sx={{ borderRadius: "50%" }}
//                 onClick={() => setMode(mode === "light" ? "dark" : "light")}
//                 aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
// 				>
//                 {mode === "dark" ? <SunnyIcon /> : <BedtimeIcon />}
//             </IconButton>
//         </ThemeProvider>
//     );
// };

// export default App;
