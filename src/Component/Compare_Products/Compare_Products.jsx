import React from "react";
import "./Compare_Products.css";
import { Box, Container } from "@material-ui/core";
import img_ch from "../IMG/image -cha.png";

const Compare_Products = () => {
  return (
    <>
      <Container>
        <span>
          <Box
            className="ompare_Products"
            style={{
              width: "204px",
              height: "107px",
              bgcolor: "rgba(245, 247, 255, 1)",
              marginTop: "20px",
              //   border: "2px solid red",
              textAlign: "center",
              "@media (max-width: 600px)": {
                width: "339px",
              },
            }}
          >
            <Box
              className="You_have"
              style={{
                width: "233px",
                height: "50px",
                color: "rgba(0, 0, 0, 1)",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Compare Products
            </Box>
            <Box
              className="You_have"
              style={{
                width: "203px",
                height: "47px",
                color: "rgba(0, 0, 0, 1)",
                justifyContent: "center",
                textAlign: "center",
                textAlign: "center",
              }}
            >
              You have no items to compare.
            </Box>
          </Box>
          <Box className="ompare_Products">
            <Box>
              {" "}
              <Box
                className="You_have"
                style={{
                  width: "233px",
                  height: "50px",
                  color: "rgba(0, 0, 0, 1)",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                My Wish List
              </Box>
              <Box>
                <p
                  className="You_have"
                  style={{
                    width: "203px",
                    height: "47px",
                    color: "rgba(0, 0, 0, 1)",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    //       "@media (max-width: 600px)": {
                    //     width: "352px",
                    //   },
                  }}
                >
                  {" "}
                  You have no items in your wish list.
                </p>
              </Box>
            </Box>
            <Box>
              <img
                style={{ width: "200px", height: "370px" }}
                src={img_ch}
                alt=""
              />
            </Box>
            <Box
              className="MSI_has"
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <p>
                MSI has unveiled the Prestige Series line of business-class and
                gaming notebooks. Tuned for color accuracy, the Prestige Series
                also leverages True Color Technology, which allows users to
                adjust the display profile to best fit their computing needs.
                There are six different screen profiles, which are tuned for
                gaming, reducing eye fatigue, sRGB color accuracy, increasing
                clarity for words and lines, reducing harmful blue light, and
                optimizing contrast for watching movies. Given the various
                display profiles and discrete graphics chip, the Prestige Series
                notebooks can be used for various design work as well as for
                office tasks given that the screen can be adjusted for better
                clarity, color accuracy, or for eye strain reduction. Users
                working with video or 3D rendering will appreciate the "movie
                mode" for which contrast is increased. Home users or students
                can benefit from the "anti-blue" and the "office mode" options,
                both of which are designed to reduce eye strain. This is helpful
                when working on the computer for extended periods of time.
                Additionally, in their down time, students can also use the
                "gamer mode" to increase the screen brightness.
              </p>
              <span>
                <button
                  style={{
                    width: "88px",
                    height: "37px",
                    borderRadius: "50px",
                    border: "2px solid ",
                    padding: "8px, 26px, 8px, 26px",
                  }}
                >
                  More
                </button>
              </span>
            </Box>
          </Box>
        </span>
      </Container>
    </>
  );
};

export default Compare_Products;
