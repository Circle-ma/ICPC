import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import Home from "./Homecomponents/Home";

const Bg = styled.div`
  background-image: url(wave.svg);
  background-size: cover;
  /* background-repeat: no-repeat; */
  /* background-position: center center; */
`;

const Image = styled.img`
  width: 100%;
  max-width: 350px;
  /* height: auto; */
  position: center center;
`;

const Rubbish = styled.img`
  width: 100%;
  max-width: 10000px;
  /* height: auto; */
  position: center center;
`;

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffaa00",
    },
  },
});

interface TabPanelProps {
  //   children?: React.ReactNode;
  index: number;
  value: number;
  setValue: (value: React.SetStateAction<number>) => void;
}

function TabPanel(props: TabPanelProps) {
  const { value, index, setValue } = props;

  return (
    <div hidden={value !== index}>
      {value === 0 && <Home setValue={setValue} />}
      {value === 1 && (
        <Box>
          <Typography align="center">
            hello,here is still empty la @_@
          </Typography>
        </Box>
      )}
      {value === 2 && (
        <Box>
          <Typography align="center">omg,my hair is losing!</Typography>
        </Box>
      )}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <Container>
        <ThemeProvider theme={theme}>
          <Tabs
            value={value}
            onChange={handleChange}
            // centered
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab label="Home" sx={{ fontSize: 18 }} />
            <Tab label="Online Preliminary" sx={{ fontSize: 18 }} />
            <Tab label="Onsite Contest" sx={{ fontSize: 18 }} />
          </Tabs>
        </ThemeProvider>
      </Container> */}
      <Bg>
        <Container>
          <Box textAlign={"center"}>
            {/* <Image src="icpc-logo-full.png"></Image> */}
            {/* <Typography
              variant="h5"
              color="transparent"
              sx={{
                backgroundImage:
                  "linear-gradient(90deg,#d5da98,#ed782a ,#ebb73d ,#cc4621)",
                WebkitBackgroundClip: "text",
              }}
              // fontWeight="bold"
              align="center"
              marginTop={4}
            >
              2023 ICPC Asia Hong Kong Regional
            </Typography> */}
            <Rubbish src="icpc2023.svg"></Rubbish>
            <Typography
              variant="h6"
              color="transparent"
              sx={{
                backgroundImage:
                  "linear-gradient(45deg,#0008ff -5%,#ff00ff 105%);",
                WebkitBackgroundClip: "text",
              }}
              align="center"
              // marginTop={8}
              paddingBottom={4}
            >
              Contest Date: 14 January 2023 (Saturday)
            </Typography>
          </Box>
        </Container>
      </Bg>
      <Container>
        <TabPanel value={value} index={0} setValue={setValue} />
        <TabPanel value={value} index={1} setValue={setValue} />
        <TabPanel value={value} index={2} setValue={setValue} />
      </Container>
    </>
  );
}
