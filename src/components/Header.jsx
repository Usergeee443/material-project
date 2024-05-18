import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 0, paddingBlock: "20px" }}>
        <Toolbar variant="dense">
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ borderRadius: 0, width: "100%" }} alt="Remy Sharp" src="/src/assets/IMAGE.jpg" />
          </Stack>

          <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "space-between" }}>
            <Box sx={{ typography: "body1", gap: "30px", display: "flex", paddingLeft: "50px", alignItems: "center" }}>
              <Link sx={{ textDecoration: "none", color: "black" }} href="/">
                Home
              </Link>
              <Link sx={{ textDecoration: "none", color: "black" }} href="/">
                About
              </Link>
              <Link sx={{ textDecoration: "none", color: "black" }} href="/">
                Services
              </Link>
              <Link sx={{ textDecoration: "none", color: "black" }} href="/">
                Pages
              </Link>
              <Link sx={{ textDecoration: "none", color: "black" }} href="/">
                Contacts
              </Link>
            </Box>
            <Box
              sx={{
                typography: "body1",
                gap: "30px",
                display: "flex",
                paddingLeft: "50px",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Link sx={{ textDecoration: "none", color: "black" }} href="/">
                cart(0)
              </Link>
              <Button
                sx={{
                  backgroundColor: "#0075FF",
                  color: "white",
                  borderRadius: "10px",
                  width: "174px",
                  height: "54px",
                }}
              >
                Get a free quote
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
