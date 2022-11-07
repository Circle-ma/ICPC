import { Box, Divider, Typography } from "@mui/material";
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
      <Typography variant="h3" align="center">
        Timeline
      </Typography>
      <BasicTimeline setValue={setValue}></BasicTimeline>
      <Divider />
      <News></News>
      <Box marginY={5}></Box>
      <OC></OC>
    </Box>
  );
}
