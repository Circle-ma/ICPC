import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Box, Button, Divider, Typography } from "@mui/material";

interface TimeProps {
  setValue: (value: React.SetStateAction<number>) => void;
}

export default function BasicTimeline(props: TimeProps) {
  const { setValue } = props;
  return (
    <Box>
      <Typography
        variant="h3"
        align="center"
        color="transparent"
        sx={{
          backgroundImage:
            "linear-gradient(90deg,#2ca2b4,#5598de 24%,#7f87ff 45%,#f65aad 76%,#ec3d43);",
          WebkitBackgroundClip: "text",
        }}
      >
        Timeline
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Sep 10
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Button
              size="large"
              disableRipple
              onClick={() => {
                setValue(1);
              }}
            >
              Online Preliminary
            </Button>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Nov 5-6
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <Button
              size="large"
              disableRipple
              onClick={() => {
                setValue(2);
              }}
            >
              Onsite Contest
            </Button>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <Divider />
    </Box>
  );
}
