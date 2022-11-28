import { Box, Text, useBreakpoint } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import GitHubCalendar from 'react-github-calendar';
import Aos from "aos";
import "aos/dist/aos.css";

const GithubCalendar = () => {

  const varient = useBreakpoint({
        base: {with:"70%"},
        md: {with:"80%"},
        sm: {with:"90%"},
    })

    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  

  return (
   <Box color="white" margin={"auto"} width={['80%', "80%", "100%"]} p={['0rem',"1rem", "2rem"]}   mb={['5rem','7rem','10rem']}  >
    
      <Text  color='aqua' fontSize={["2rem", "2rem", '2.5rem']} m="auto" textDecoration={"underline"}>Github Calendar</Text>

<Box data-aos={"zoom-in-up"}>
<GitHubCalendar username="amit05c"  showWeekdayLabels="true" style={{margin:"auto"}}  />

<Box display={"flex"} width={['100%', "80%", "70%"]} m="auto" justifyContent="space-evenly" alignItems={"center"}  gap="1rem" mt={["5rem","3rem",""]}>
<p><img align="center" src="https://github-readme-stats.vercel.app/api?username=amit05c&show_icons=true&locale=en" alt="amit05c" /></p>

<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=amit05c&" alt="amit05c" /></p>
</Box>
</Box>
    
   </Box>
  )
}

export default GithubCalendar