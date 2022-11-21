import { Box, Divider, Grid, Typography } from "@mui/material";

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
      {/* <Typography align="center">
        Hong Kong teams: Onsite contest at The Chinese University of Hong Kong
      </Typography>
      <Typography align="center">
        Non-Hong Kong teams: Online contest
      </Typography> */}
      <Grid container>
        <Grid xs={6}>
          <Typography align="center">Hong Kong teams:</Typography>
          <Typography align="center">Non-Hong Kong teams:</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography align="center">
            Onsite contest at The Chinese University of Hong Kong
          </Typography>
          <Typography align="center">Online contest</Typography>
        </Grid>
      </Grid>
      <Box marginY={5}></Box>
      <Divider />
    </>
  );
}
