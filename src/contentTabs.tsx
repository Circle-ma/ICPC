import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import Home from "./Homecomponents/Home";

const Bg = styled.div`
  background-image: url(/icpc-bg.png);
  background-size: cover;
  background-position: center center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  position: center center;
`;

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
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
    <Box>
      <Bg>
        <Box paddingBottom={20} paddingTop={10}>
          {/* <Box marginLeft={130}> */}
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
          {/* <Container> */}
          <Box textAlign={"center"}>
            <Box paddingY={5}>
              <Image src="icpc_logo_fullfull.png"></Image>
            </Box>
            <Container>
              <Typography variant="h3" color={"white"} align="center">
                2023 ACM ICPC Asia Hong Kong Regional
              </Typography>
            </Container>
          </Box>
          {/* </Container> */}
        </Box>
      </Bg>
      <TabPanel value={value} index={0} setValue={setValue} />

      <TabPanel value={value} index={1} setValue={setValue} />

      <TabPanel value={value} index={2} setValue={setValue} />
    </Box>
  );
}
