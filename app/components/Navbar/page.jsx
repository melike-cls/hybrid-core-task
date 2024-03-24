"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { signIn, signOut } from "next-auth/react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { navItems } from "@/app/constants/navItems";
import styles from "./styles.module.css";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const pathName = usePathname();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const open = anchorEl;
  const handleDropdown = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const DrawerContent = () => (
    <div>
      {/* Yönlendirme Linkleri */}
      {navItems.map((item) => (
        <Link key={item.id} href={item.link} passHref>
          <Button
            color="inherit"
            onClick={handleDrawerClose}
            style={{ display: "block", margin: "10px 0" }}
          >
            {item.title}
          </Button>
        </Link>
      ))}
      {/* Kullanıcı Girişi ve Çıkışı İçin Butonlar */}
      <Button
        color="inherit"
        onClick={() => {
          signIn();
          handleDrawerClose();
        }}
        style={{ display: "block", margin: "10px 0" }}
      >
        <Link href="/api/auth/signin" underline="hover">
          Sign In
        </Link>
      </Button>
      <Button
        color="inherit"
        onClick={() => {
          signOut();
          handleDrawerClose();
        }}
        style={{ display: "block", margin: "10px 0" }}
      >
        <Link href="/api/auth/signout" underline="hover">
          Sign Out
        </Link>
      </Button>
    </div>
  );

  return (
    <AppBar
      style={{
        backgroundColor: pathName === "/admin" ? "#517f81" : "transparent",
        boxShadow: "none",
        padding: "40px 60px",
        opacity: 100,
        zIndex: 1000,
      }}
      position="absolute"
    >
      <Toolbar>
        {isMobile && (
          <div className={styles.sideBarContainer}>
            <div>
              <Link href="/" passHref>
                <img src={"/images/Logo.png"} alt="HybridCore" />
              </Link>
            </div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerOpen}
              sx={{ mr: 2 }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </div>
        )}

        {!isMobile && (
          <nav className={styles.container}>
            <div>
              <Link href="/" passHref>
                <img src={"/images/Logo.png"} alt="HybridCore" />
              </Link>
            </div>
            <div className={styles.navItems}>
              {navItems.map((item) => (
                <>
                  {item.id === 3 ? (
                    <>
                      <Button
                        onClick={handleDropdown}
                        aria-controls={open ? item.title : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        className={styles.navItem}
                        style={{ marginTop: "-8px" }}
                      >
                        {item.title}
                      </Button>
                      <Menu
                        id={item.title}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <Link href="/aboutUs/WhatWeDo" passHref>
                          <MenuItem onClick={handleClose}>What We Do</MenuItem>
                        </Link>
                        <Link href="/aboutUs/WhoWeAre" passHref>
                          <MenuItem onClick={handleClose}>Who We Are</MenuItem>
                        </Link>
                      </Menu>
                    </>
                  ) : (
                    <Link
                      key={item.id}
                      href={item.link}
                      passHref
                      className={styles.navItem}
                    >
                      {item.title}
                    </Link>
                  )}
                </>
              ))}
            </div>
            {pathName !== "/admin" && (
              <div className={styles.buttonContainer}>
                <Link
                  href="/api/auth/signout"
                  onClick={() => signOut(null, { callbackUrl: "/" })}
                  className={styles.signUp}
                >
                  Sign Up
                </Link>
                <Link
                  href="/api/auth/signin"
                  onClick={() => signIn(null, { callbackUrl: "/" })}
                  className={styles.signIn}
                >
                  Sign In
                </Link>
              </div>
            )}
          </nav>
        )}
      </Toolbar>

      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
        <DrawerContent />
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
