import { Box, Container, Divider, Typography } from "@mui/material";

export default function Fee() {
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
        Registration Fees
      </Typography>
      <Container>
        <Typography align="center">$1600 Hong Kong Dollars</Typography>
      </Container>
      <Box marginY={5}></Box>
      <Divider />
    </>
  );
}
