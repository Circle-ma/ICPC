import { Box, Divider, Typography } from "@mui/material";
import Format from "./Format";
import News from "./News";
import OC from "./OC";
import BasicTimeline from "./timeLine";

interface HomeProps {
  setValue: (value: React.SetStateAction<number>) => void;
}

export default function Home(props: HomeProps) {
  const { setValue } = props;
  return (
    <Box marginTop={5}>
      {/* <BasicTimeline setValue={setValue}></BasicTimeline> */}
      <News></News>
      <Format></Format>
      <Box marginY={5}></Box>
      <OC></OC>
    </Box>
  );
}
