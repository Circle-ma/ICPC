import {
  Box,
  Container,
  Divider,
  Link,
  styled,
  Typography,
} from "@mui/material";

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
      21 November 2022: Registration is now open! Follow this link:
      <Link href="https://icpc.global" underline="hover">
        https://icpc.global
      </Link>
    </Typography>
  );

  return (
    <Root>
      {content}
      {/* <Divider></Divider> */}
      {/* {content}
      <Divider></Divider>
      {content}
      <Divider></Divider>
      {content}
      <Divider></Divider>
      {content} */}
    </Root>
  );
}

export default function News() {
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
