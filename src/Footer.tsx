import styled from "@emotion/styled";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
// import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
// import EmailIcon from "@mui/icons-material/Email";

const Image = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
`;

const CUImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
`;

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#1B1C1D" }} paddingBottom={20} paddingTop={5}>
      <Container>
        <BasicGrid></BasicGrid>
      </Container>
    </Box>
  );
}

function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid xs={6}>
          <Typography color={"gray"} variant="h5">
            PRIMARY SPONSOR
          </Typography>
          <Image src="ibm.png"></Image>
          <Typography color={"gray"} variant="h5" marginTop={5}>
            PRIMARY SPONSOR
          </Typography>
          <Image src="ibm.png"></Image>
          <Image src="ibm.png"></Image>
          <Image src="ibm.png"></Image>
          <Image src="ibm.png"></Image>
        </Grid>

        <Grid xs={6}>
          <Typography color={"gray"} variant="h5">
            CONTACT US
          </Typography>
          {/* <EmailRoundedIcon></EmailRoundedIcon> */}
          {/* <EmailIcon></EmailIcon> */}
          <Typography color={"gray"} variant="body1" marginTop={5}>
            {/* <EmailIcon></EmailIcon> */}
            📭 acmicpc@cse.cuhk.edu.hk
          </Typography>
          <Typography color={"gray"} variant="body1" marginY={5}>
            🏢 Department of Computer Science and Engineering, Ho Sin-Hang
            Engineering Building, The Chinese University of Hong Kong, Shatin,
            Hong Kong
          </Typography>
          <CUImage src="engg.png"></CUImage>
        </Grid>
      </Grid>
    </Box>
  );
}
