import Flex from "../Flex";
import { Container } from "../Layout";

function Footer() {
  return (
    <>
      <Container
        css={{
          marginTop: "20px",
          borderTop: "1px solid $colors$border",
          padding: "40px",
        }}
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          css={{
            p: {
              color: "$textSecondary",
            },

            a: {
              color: "$textSecondary",
              textDecoration: "none",
              transition: "all 0.2s ease",
              fontWeight: "bold",

              "&:hover": {
                color: "$text",
              },
            },
          }}
        >
          <p>
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by{" "}
            <a href="https://www.linkedin.com/in/ysraelmoreno/">
              @ysraelmoreno
            </a>
          </p>
        </Flex>
      </Container>
    </>
  );
}

export default Footer;
