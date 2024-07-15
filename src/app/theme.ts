import { Button, Checkbox, Input, Pagination, PasswordInput, ScrollArea, Text, createTheme, rem } from "@mantine/core";

import { CheckboxIcon } from "@/shared/ui/custom-checkbox-icon";

import buttonClasses from "./styles/Button.module.css";
import checkboxClasses from "./styles/Checkbox.module.css";
import inputClasses from "./styles/Input.module.css";
import inputWrapperClasses from "./styles/InputWrapper.module.css";
import paginationClasses from "./styles/Pagination.module.css";
import passwordInputClasses from "./styles/PasswordInput.module.css";
import scrollareaClasses from "./styles/ScrollArea.module.css";
import textClasses from "./styles/Text.module.css";

export const theme = createTheme({
  headings: {
    fontFamily: "CraftworkGrotesk, sans-serif",
    sizes: {
      h1: {
        fontSize: rem(96),
        fontWeight: "700",
        lineHeight: "normal",
      },
      h2: {
        fontSize: rem(64),
        fontWeight: "600",
        lineHeight: "normal",
      },
      h3: {
        fontSize: rem(36),
        fontWeight: "600",
        lineHeight: "normal",
      },
      h4: {
        fontSize: rem(24),
        fontWeight: "600",
        lineHeight: "normal",
      },
      h5: {
        fontSize: rem(21),
        fontWeight: "600",
        lineHeight: "25.2px",
      },
    },
  },
  fontFamily: "CraftworkGrotesk, sans-serif",
  breakpoints: {
    0: "0em",
    xs: "30em",
    sm: "48em",
    md: "75em",
    lg: "90em",
    xl: "120em",
  },
  components: {
    Text: Text.extend({
      classNames: textClasses,
    }),
    Input: Input.extend({
      vars: () => {
        return {
          wrapper: {
            "--input-radius": rem("8px"),
          },
        };
      },
      classNames: inputClasses,
    }),
    Button: Button.extend({
      vars: () => {
        return {
          root: {
            "--button-radius": rem("8px"),
          },
        };
      },
      classNames: buttonClasses,
    }),
    Checkbox: Checkbox.extend({
      vars: () => {
        return {
          root: {
            "--checkbox-radius": rem("6px"),
          },
        };
      },
      classNames: checkboxClasses,
      defaultProps: {
        icon: CheckboxIcon,
      },
    }),
    ScrollArea: ScrollArea.extend({
      classNames: {
        root: scrollareaClasses.root,
        thumb: scrollareaClasses.thumb,
        viewport: scrollareaClasses.viewport,
        scrollbar: scrollareaClasses.scrollbar,
      },
    }),
    Pagination: Pagination.extend({
      classNames: paginationClasses,
    }),
    InputWrapper: Input.Wrapper.extend({
      classNames: inputWrapperClasses,
    }),
    PasswordInput: PasswordInput.extend({
      classNames: {
        visibilityToggle: passwordInputClasses.visibilityToggle,
      },
    }),
  },
});
