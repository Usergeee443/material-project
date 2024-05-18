import { Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ActionAreaCard from "./components/Cards";
import DenseAppBar from "./components/Header";

function App() {
  return (
    <Box sx={{ paddingInline: "70px" }}>
      <DenseAppBar />
      <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "space-between", gap: "100px" }}>
        <Box
          sx={{
            width: "678px",
            height: "364px",
            top: "230px",
            left: "110px",
            gap: "0px",
            opacity: "0px",
          }}
        >
          <Box
            sx={{ maxWidth: "600px", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
          >
            <Box>
              <Typography variant="h3" color="black" component="div">
                Quality cleaning
                <br /> for your home
              </Typography>
              <Typography variant="h9" color="gray" component="div" sx={{ paddingTop: "20px", paddingBottom: "20px" }}>
                Condimentum mauris sit cursus amet id non neque pharetra <br />
                nulla ornare sed facilisis senectus dapibus nibh ultrices eget
                <br /> suscipit aliquet et nulla magna lacus penatibus.{" "}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Button
                  sx={{
                    backgroundColor: "#0075FF",
                    color: "white",
                    borderRadius: "10px",
                    width: "170px",
                    height: "50px",
                  }}
                >
                  Get a free quote
                </Button>
                <Stack direction="row" spacing={2}>
                  <Avatar
                    sx={{ borderRadius: 0, width: "70%", height: "70%" }}
                    alt="Remy Sharp"
                    src="/src/assets/IMAGE (2).jpg"
                  />
                </Stack>
                <Typography variant="h5" color="black" component="div">
                  (414) 567 - 2109
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ borderRadius: 0, width: "100%", height: "100%" }}
            alt="Remy Sharp"
            src="/src/assets/IMAGE (1).jpg"
          />
        </Stack>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "120px" }}>
        <Box>
          <Typography variant="h3" color="black" component="div" sx={{ textAlign: "center" }}>
            How our service works?
          </Typography>
          <Typography variant="h9" color="black" component="div" sx={{ textAlign: "center", paddingTop: "20px" }}>
            Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
            <br /> neque nisi felis non ultrices massa id egestas quam velit pretium nu.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          gap: "7rem",
          marginTop: "5rem",
          paddingInline: "4rem",
        }}
      >
        <Box>
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{ borderRadius: 0, width: "100%", height: "100%" }}
              alt="Remy Sharp"
              src="/src/assets/IMAGE (3).jpg"
            />
          </Stack>
          <Box>
            <Typography variant="h5" color="black" component="div" sx={{ textAlign: "center", paddingTop: "40px" }}>
              1. Schedule online
            </Typography>
            <Typography variant="h9" color="gray" component="div" sx={{ textAlign: "center", paddingTop: "10px" }}>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.{" "}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{ borderRadius: 0, width: "100%", height: "100%" }}
              alt="Remy Sharp"
              src="/src/assets/IMAGE (4).jpg"
            />
          </Stack>
          <Box>
            <Typography variant="h5" color="black" component="div" sx={{ textAlign: "center", paddingTop: "40px" }}>
              1. Schedule online
            </Typography>
            <Typography variant="h9" color="gray" component="div" sx={{ textAlign: "center", paddingTop: "10px" }}>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.{" "}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{ borderRadius: 0, width: "100%", height: "100%" }}
              alt="Remy Sharp"
              src="/src/assets/IMAGE (5).jpg"
            />
          </Stack>
          <Box>
            <Typography variant="h5" color="black" component="div" sx={{ textAlign: "center", paddingTop: "40px" }}>
              1. Schedule online
            </Typography>
            <Typography variant="h9" color="gray" component="div" sx={{ textAlign: "center", paddingTop: "10px" }}>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "30px", marginTop: "40px" }}>
        <Button
          sx={{
            backgroundColor: "#0075FF",
            color: "white",
            borderRadius: "10px",
            width: "170px",
            height: "50px",
          }}
        >
          Get a free quote
        </Button>
        <Button
          sx={{
            backgroundColor: "#fff",
            boxShadow: 5,
            color: "#000",
            borderRadius: "10px",
            width: "170px",
            height: "50px",
          }}
        >
          Get a free quote
        </Button>
      </Box>

      <Divider sx={{ marginBottom: "12.5rem", marginTop: "12.5rem" }} />

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Typography variant="h3" color="black" component="div" sx={{ textAlign: "center" }}>
            Our cleaning services have <br />
            no comparison
          </Typography>
          <Typography variant="h9" color="black" component="div" sx={{ textAlign: "center", paddingTop: "20px" }}>
            Lobortis mattis odio leo eget mauris met aliquet semper molestie
            <br /> sollicitudin congue massa mauris lectus vitae cras viverra gravida sapien.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          gap: "100px",
          paddingInline: "20rem",
          marginTop: "30px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{ borderRadius: 0, width: "100%", height: "100%" }}
              alt="Remy Sharp"
              src="/src/assets/IMAGE (6).jpg"
            />
          </Stack>
          <Typography variant="h9" color="black" component="div" sx={{ textAlign: "center" }}>
            3,480+
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{ borderRadius: 0, width: "100%", height: "100%" }}
              alt="Remy Sharp"
              src="/src/assets/IMAGE (7).jpg"
            />
          </Stack>
          <Typography variant="h9" color="black" component="div" sx={{ textAlign: "center" }}>
            12,540+
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{ borderRadius: 0, width: "100%", height: "100%" }}
              alt="Remy Sharp"
              src="/src/assets/IMAGE (8).jpg"
            />
          </Stack>
          <Typography variant="h9" color="black" component="div" sx={{ textAlign: "center" }}>
            100+
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ borderRadius: 0, width: "100%", height: "100%" }}
            alt="Remy Sharp"
            src="/src/assets/Frame.jpg"
          />
        </Stack>
      </Box>

      <Divider sx={{ marginBottom: "12.5rem", marginTop: "12.5rem" }} />

      <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "space-between" }}>
        <Typography variant="h3" color="black" component="div">
          Take a look at our
          <br /> professional services
        </Typography>
        <Button
          sx={{
            backgroundColor: "#fff",
            boxShadow: 5,
            color: "#000",
            borderRadius: "10px",
            width: "170px",
            height: "50px",
          }}
        >
          Explore services
        </Button>
      </Box>

      <ActionAreaCard />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          marginBottom: "10rem",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ borderRadius: 0, width: "100%", height: "100%" }}
            alt="Remy Sharp"
            src="/src/assets/Frame (1).jpg"
          />
        </Stack>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          marginBottom: "10rem",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ borderRadius: 0, width: "100%", height: "100%" }}
            alt="Remy Sharp"
            src="/src/assets/Frame (2).jpg"
          />
        </Stack>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ borderRadius: 0, width: "100%", height: "100%" }}
            alt="Remy Sharp"
            src="/src/assets/Frame (3).jpg"
          />
        </Stack>
      </Box>

      <Divider sx={{ marginBottom: "12.5rem", marginTop: "12.5rem" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          marginBottom: "10rem",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ borderRadius: 0, width: "100%", height: "100%" }}
            alt="Remy Sharp"
            src="/src/assets/Frame (4).jpg"
          />
        </Stack>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          marginBottom: "10rem",
          backgroundColor: "#F7F9FC",
          height: "150vh",
          gap: "40px",
        }}
      >
        <Box>
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{ borderRadius: 0, width: "100%", height: "100%" }}
              alt="Remy Sharp"
              src="/src/assets/Frame (7).jpg"
            />
          </Stack>
        </Box>
        <Box
          sx={{
            width: "600px",
            height: "640px",
            backgroundColor: "white",
            paddingBlock: "8rem",
            paddingInline: "3rem",
          }}
        >
          <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "space-between" }}>
            <TextField sx={{ width: "15rem" }} label="Asynchronous" />
            <TextField sx={{ width: "15rem" }} label="Asynchronous" />
          </Box>
          <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "space-between", marginTop: "30px" }}>
            <TextField sx={{ width: "15rem" }} label="Asynchronous" />
            <TextField sx={{ width: "15rem" }} label="Asynchronous" />
          </Box>
          <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "space-between", marginTop: "30px" }}>
            <TextField sx={{ width: "15rem" }} label="Asynchronous" />
            <TextField sx={{ width: "15rem" }} label="Asynchronous" />
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <TextField sx={{ width: "100%" }} label="Asynchronous" />
          </Box>
          <Box>
            <Button
              sx={{
                backgroundColor: "#0075FF",
                color: "white",
                borderRadius: "10px",
                width: "170px",
                height: "50px",
                marginTop: "30px",
              }}
            >
              Get a free quote
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ borderRadius: 0, width: "100%", height: "100%" }}
            alt="Remy Sharp"
            src="/src/assets/Frame (6).jpg"
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default App;
