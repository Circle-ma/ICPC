import styled from "@emotion/styled";
import { createTheme, ThemeProvider } from "@mui/material";
import CenteredTabs from "./contentTabs";
import Footer from "./Footer";

// const Bg = styled.div`
//   background-image: url(/icpc-bg.png);
//   background-size: cover;
//   background-position: center center;
// `;

const font = createTheme({
  typography: {
    fontFamily: ["B612 Mono"].join(","),
  },
});

function App() {
  return (
    <>
      {/* <Bg> */}
      <ThemeProvider theme={font}>
        <CenteredTabs></CenteredTabs>
      </ThemeProvider>
      <Footer></Footer>
      {/* </Bg> */}
    </>
  );
}

export default App;
