import { Box, Container, Divider, Grid, Typography } from "@mui/material";

export default function Format() {
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
        Format
      </Typography>
      <Box marginY={5}></Box>
      <Container>
        <Grid container>
          <Grid xs={12}>
            <Grid container>
              <Grid xs={12} sm={6}>
                <Typography fontWeight={"bold"} align="center">
                  Hong Kong teams:
                </Typography>
              </Grid>
              <Grid xs={12} sm={6}>
                <Typography align="center">
                  Onsite contest at The Chinese University of Hong Kong
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12}>
            <Grid container>
              <Grid xs={12} sm={6}>
                <Typography fontWeight={"bold"} align="center">
                  Non-Hong Kong teams:
                </Typography>
              </Grid>
              <Grid xs={12} sm={6}>
                <Typography align="center">Online contest</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box marginY={5}></Box>
      <Divider />
    </>
  );
}
