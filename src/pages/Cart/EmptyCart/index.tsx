import { Link } from "react-router-dom";
import Flex from "../../../components/Flex";

function EmptyCart() {
  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        css={{
          padding: "50px 30px",
          height: "50vh",
          span: {
            color: "$textSecondary",
          },
        }}
      >
        <h2>Your cart is empty</h2>
        <span>
          It look's like you don't have any item, what about{" "}
          <Link to="/">shopping?</Link>
        </span>
      </Flex>
    </>
  );
}

export default EmptyCart;
