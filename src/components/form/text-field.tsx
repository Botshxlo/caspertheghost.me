import * as React from "react";
import type { TextFieldProps as RATextFieldProps } from "react-aria-components";
import { Input } from "./input";
import { twMerge } from "tailwind-merge";
import { ExclamationTriangleFill } from "react-bootstrap-icons";
import { Textarea } from "./textarea";
import { useTextField } from "@react-aria/textfield";
import type { TextFieldAria } from "@react-aria/textfield";

interface TextFieldProps extends Omit<RATextFieldProps, "size"> {
  errorMessage?: string;
  label: React.ReactNode;
  inputElementType?: "input" | "textarea";
}

export const TextField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, TextFieldProps>(
  (props, _ref) => {
    const _inputRef = React.useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
    const inputRef = _ref || _inputRef;
    const { labelProps, inputProps, errorMessageProps } = useTextField(
      props,
      inputRef as React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement>,
    );

    return (
      <div className={twMerge("flex flex-col mb-3 w-full", props.className)}>
        <label {...labelProps} className="font-medium mb-0.5">
          {props.label}
        </label>

        {props.inputElementType === "textarea" ? (
          <Textarea
            {...(inputProps as TextFieldAria<"textarea">["inputProps"])}
            ref={inputRef as React.MutableRefObject<HTMLTextAreaElement | null>}
            errorMessage={props.errorMessage}
          />
        ) : (
          <Input
            {...inputProps}
            size="default"
            ref={inputRef as React.MutableRefObject<HTMLInputElement | null>}
            errorMessage={props.errorMessage}
          />
        )}
        {props.errorMessage ? (
          <span
            {...errorMessageProps}
            className="text-red-400 font-medium mt-0.5 flex items-center gap-2"
            slot="errorMessage"
          >
            <ExclamationTriangleFill className="fill-red-400" /> {props.errorMessage}
          </span>
        ) : null}
      </div>
    );
  },
);
