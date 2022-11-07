import { Box, Container, Divider, styled, Typography } from "@mui/material";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));
function DividerText() {
  const content = (
    <Typography align="center">
      {`RCD Report Available
Updated on Nov 29 (Tue), 2:00am (GMT+8)`}
    </Typography>
  );

  return (
    <Root>
      {content}
      <Divider></Divider>
      {content}
      <Divider></Divider>
      {content}
      <Divider></Divider>
      {content}
      <Divider></Divider>
      {content}
    </Root>
  );
}

export default function News() {
  return (
    <>
      <Typography variant="h3" align="center" marginY={5}>
        News
      </Typography>
      <Container>
        <DividerText></DividerText>
      </Container>
      <Box marginY={5}></Box>
      <Divider />
    </>
  );
}
