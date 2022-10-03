import { Box, Text, useBreakpoint } from '@chakra-ui/react';
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import Aos from "aos";
import "aos/dist/aos.css";

const GithubCalendar = () => {
    const varient = useBreakpoint({
        base: {with:"70%"},
        md: {with:"80%"},
        sm: {with:"90%"},
    })
  return (
   <Box color="white" margin={"auto"} width={['90%', "80%", "70%"]} p={['0rem',"1rem", "2rem"]} data-aos="fade-up"  height="50vh" >
      <Text  color='aqua' fontSize={["2rem", "2rem", '2.5rem']} m="auto">Github Calendar</Text>

    <GitHubCalendar username="amit05c" year={new Date().getFullYear()} showWeekdayLabels="true" style={{margin:"auto"}} />
   </Box>
  )
}

export default GithubCalendar