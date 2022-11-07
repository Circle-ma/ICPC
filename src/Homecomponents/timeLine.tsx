import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Button } from "@mui/material";

interface TimeProps {
  setValue: (value: React.SetStateAction<number>) => void;
}

export default function BasicTimeline(props: TimeProps) {
  const { setValue } = props;
  return (
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
  );
}
