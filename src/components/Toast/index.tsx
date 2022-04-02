import { ToastContainer } from "./styles";
import ToastItem from "./ToastItem";

export interface ToastMessage {
  id: string;
  type?: "success" | "error" | "info";
  title: string;
  description?: string;
}

interface ToastProps {
  messages: ToastMessage[];
}

function Toast({ messages }: ToastProps) {
  return (
    <>
      <ToastContainer>
        {messages &&
          messages.map((message) => (
            <ToastItem
              key={message.id}
              id={message.id}
              description={message.description}
              title={message.title}
              type={message.type}
            ></ToastItem>
          ))}
      </ToastContainer>
    </>
  );
}

export default Toast;
