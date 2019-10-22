import React from "react";
import { Box, Text, Heading } from 'gestalt';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <>
      <Box
        display = "flex"
        alignItems = "center"
        justifyContent= "around"
        height={70}
        color="midnight"
        padding={1}
        shape="roundedBottom"
      >
        {/*************** Sign in Link ************************ */}
        <NavLink to="/signin" >
          <Text size = "x1" color="white">Sign In</Text>
        </NavLink>

        {/****** Title and Logo *****/}
        <NavLink to ="/">
          <Heading size="xs" color="orange">
            BrewHaha
          </Heading>
        </NavLink>

        {/*************** Sign up Link ************************ */}
        <NavLink to="/signup" >
          <Text size = "x1" color="white">Sign Up</Text>
        </NavLink>

      </Box>

    </>

  )
}

export default Navbar;