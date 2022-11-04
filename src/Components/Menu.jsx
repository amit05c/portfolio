import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./navbar.module.css";
export function PlacementExample({ size, pos }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        {/* <Stack direction='row' mb='4'>
            <Radio value='top'>Top</Radio>
            <Radio value='right'>Right</Radio>
            <Radio value='bottom'>Bottom</Radio>
            <Radio value='left'>Left</Radio>
          </Stack> */}
      </RadioGroup>
      <Button
        size={size}
        pos={pos}
        right={"10%"}
        top={"2%"}
        colorScheme="blue"
        onClick={onOpen}
      >
        <GiHamburgerMenu />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader> */}
          <Flex direction={"column"} gap={"1rem"} mt="2rem">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              className={styles.help}
              onClick={()=>{
                setTimeout(()=>{
                  onClose()
                },500)
              }}
            >
              About
            </Link>

            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              className={styles.help}
              onClick={()=>{
                setTimeout(()=>{
                  onClose()
                },500)
              }}
            >
              Projects
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
              className={styles.help}
              onClick={()=>{
                setTimeout(()=>{
                  onClose()
                },500)
              }}
            >
              Skills
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={2000}
              className={styles.help}
              onClick={()=>{
                setTimeout(()=>{
                  onClose()
                },500)
              }}
            >
              Contact
            </Link>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
}
