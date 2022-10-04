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
   <Box color="white" margin={"auto"} width={['90%', "80%", "70%"]} p={['0rem',"1rem", "2rem"]} data-aos="fade-up"  height={["40vh","50vh","80vh"]} border={"1px solid red"} >
      <Text  color='aqua' fontSize={["2rem", "2rem", '2.5rem']} m="auto">Github Calendar</Text>

    <GitHubCalendar username="amit05c"  showWeekdayLabels="true" style={{margin:"auto"}} />

    <Box display={"flex"} width={['100%', "80%", "75%"]} m="auto" justifyContent="space-evenly" alignItems={"center"} border="1px solid red" gap="1rem" mt={["5rem","3rem",""]}>
    <p><img align="center" src="https://github-readme-stats.vercel.app/api?username=amit05c&show_icons=true&locale=en" alt="amit05c" /></p>

<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=amit05c&" alt="amit05c" /></p>
    </Box>
   </Box>
  )
}

export default GithubCalendar