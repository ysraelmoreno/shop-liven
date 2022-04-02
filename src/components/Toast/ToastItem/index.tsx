import { FiX } from "react-icons/fi";
import { useToast } from "../../../hooks/useToast";
import { useEffect } from "react";
import { ToastItemContainer, ToastItemVariants } from "./styles";
import Flex from "../../Flex";
interface ToastItemProps extends ToastItemVariants {
  description?: string;
  title: string;
  id: string;
  type?: "success" | "error" | "info";
}

function ToastItem({
  description,
  title,
  id,
  type = "success",
}: ToastItemProps) {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 4000);

    return () => clearTimeout(timer);
  }, [id, removeToast]);

  return (
    <>
      <ToastItemContainer type={type}>
        <Flex justifyContent="spaceBetween">
          <Flex direction="column" css={{ marginRight: "10px" }}>
            {title && <strong>{title}</strong>}
            {description && <p>{description}</p>}
          </Flex>
          <Flex
            css={{
              svg: {
                "&:hover": {
                  cursor: "pointer",
                },
              },
            }}
          >
            <FiX onClick={() => removeToast(id)} />
          </Flex>
        </Flex>
      </ToastItemContainer>
    </>
  );
}

export default ToastItem;
