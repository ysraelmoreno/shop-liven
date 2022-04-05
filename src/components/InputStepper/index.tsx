import {
  forwardRef,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useState,
  useImperativeHandle,
  useRef,
  ChangeEvent,
} from "react";
import { Input, InputButton, InputStepperContainer } from "./styles";

interface InputStepperProps extends InputHTMLAttributes<HTMLInputElement> {
  steps?: number;
  onIncreaseValue?: (value: number) => void;
  onDecreaseValue?: (value: number) => void;
}

const InputStepper = forwardRef(
  (
    {
      steps = 1,
      defaultValue,
      onIncreaseValue,
      onDecreaseValue,
      onChange,
      value,
      ...props
    }: InputStepperProps,
    ref
  ) => {
    const [inputValue, setInputValue] = useState(1);

    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef);

    const handleIncrementValue = useCallback(() => {
      const valueIncreased = inputValue + steps;

      setInputValue(valueIncreased);

      onIncreaseValue && onIncreaseValue(valueIncreased);
    }, [steps, onIncreaseValue, inputValue]);

    const handleDecrementValue = useCallback(() => {
      const valueDecreased = inputValue - steps;

      setInputValue(valueDecreased);
      onDecreaseValue && onDecreaseValue(valueDecreased);
    }, [steps, onDecreaseValue, inputValue]);

    const handleInputChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInputValue(Number(value));

        onChange && onChange(event);
      },
      [onChange]
    );

    useEffect(() => {
      if (value) {
        setInputValue(Number(value));
      }
    }, [value]);
    return (
      <>
        <InputStepperContainer>
          <InputButton
            variant="ghost"
            disabled={inputValue <= 1}
            onClick={handleDecrementValue}
          >
            -
          </InputButton>
          <Input
            onChange={handleInputChange}
            value={inputValue}
            ref={inputRef}
            {...props}
          />
          <InputButton variant="ghost" onClick={handleIncrementValue}>
            +
          </InputButton>{" "}
        </InputStepperContainer>
      </>
    );
  }
);

export default InputStepper;
