import { Box, Container, Divider, Grid, Typography } from "@mui/material";

export default function OC() {
  return (
    <>
      <Typography
        variant="h3"
        align="center"
        marginY={5}
        color="transparent"
        sx={{
          backgroundImage:
            "linear-gradient(90deg,#2ca2b4,#5598de 24%,#7f87ff 45%,#f65aad 76%,#ec3d43);",
          WebkitBackgroundClip: "text",
        }}
      >
        Organizing Committees
      </Typography>
      <Container>
        <ColumnsGrid></ColumnsGrid>
      </Container>
      <Box marginY={5}></Box>
      <Divider />
    </>
  );
}

function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid xs={12} sm={6}>
          <Grid container>
            <Grid xs={12} sm={6}>
              <Typography
                fontSize={15}
                fontWeight="bold"
                marginTop={2}
                align="center"
              >
                Regional Contest Director
              </Typography>
            </Grid>
            <Grid xs={12} sm={6}>
              <Typography fontSize={15} marginTop={2} align="center">
                Siu On Chan
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid xs={6}>
          <Grid container>
            <Grid xs={6}>
              <Typography
                fontSize={15}
                fontWeight="bold"
                marginTop={2}
                align="center"
              >
                Problem Authors
              </Typography>
            </Grid>
            <Grid xs={6}>
              <Typography fontSize={15} marginTop={2} align="center">
                Kam Chuen Tung
              </Typography>
              <Typography fontSize={15} align="center">
                Kam Chuen Tung
              </Typography>
              <Typography fontSize={15} align="center">
                Kam Chuen Tung
              </Typography>
              <Typography fontSize={15} align="center">
                Kam Chuen Tung
              </Typography>
              <Typography fontSize={15} align="center">
                Kam Chuen Tung
              </Typography>
            </Grid>
          </Grid>
        </Grid> */}
        <Grid xs={12} sm={6}>
          <Grid container>
            <Grid xs={12} sm={6}>
              <Typography
                fontSize={15}
                fontWeight="bold"
                marginTop={2}
                align="center"
              >
                Other Committee Members
              </Typography>
            </Grid>
            <Grid xs={12} sm={6}>
              <Typography fontSize={15} marginTop={2} align="center">
                Jimmy Lee
              </Typography>
              <Typography fontSize={15} align="center">
                Chuck-jee Chau
              </Typography>
              <Typography fontSize={15} align="center">
                Jackey Cheung
              </Typography>
              <Typography fontSize={15} align="center">
                Yuli Jiang
              </Typography>
              <Typography fontSize={15} align="center">
                Fiona Lam
              </Typography>
              <Typography fontSize={15} align="center">
                Wallace Mak
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid xs={6}>
          <Grid container>
            <Grid xs={6}>
              <Typography
                fontSize={15}
                fontWeight="bold"
                marginTop={5}
                align="center"
              >
                Solution Authors
              </Typography>
            </Grid>
            <Grid xs={6}>
              <Typography fontSize={15} marginTop={5} align="center">
                Tsz Chiu Kwok
              </Typography>
              <Typography fontSize={15} align="center">
                Yat-Chiu Law
              </Typography>
              <Typography fontSize={15} align="center">
                Kam Chuen Tung
              </Typography>
              <Typography fontSize={15} align="center">
                Kam Chuen Tung
              </Typography>
              <Typography fontSize={15} align="center">
                Kam Chuen Tung
              </Typography>
            </Grid>
          </Grid>
        </Grid> */}
        <Grid xs={12} sm={6}>
          <Grid container>
            <Grid xs={12} sm={6}>
              <Typography
                fontSize={15}
                fontWeight="bold"
                marginTop={4}
                align="center"
              >
                Webmasters
              </Typography>
            </Grid>
            <Grid xs={12} sm={6}>
              <Typography fontSize={15} marginTop={4} align="center">
                Yu Ying Ma
              </Typography>
              <Typography fontSize={15} align="center">
                Pran Kittivorapat
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
