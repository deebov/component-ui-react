import { RefObject, useContext, createContext } from "react";
import { UseSelectStateReturn } from "../hooks/useSelectState";

const noop = () => {};

interface SelectContext {
  state: UseSelectStateReturn;
  isDisabled?: boolean
  label?: string;
  closeWithFocus: () => void;
  trigger: {
    ref: RefObject<HTMLButtonElement>;
  };
  listbox: {
    ref: RefObject<HTMLUListElement>;
  };
}

const SelectContext = createContext<SelectContext>({
  state: {
    value: null,
    setValue: noop,
    isOpen: false,
    open: noop,
    close: noop,
    toggle: noop,
    isSelected: () => false,
  },
  closeWithFocus: noop,
  trigger: {
    ref: {
      current: {} as any,
    },
  },
  listbox: {
    ref: {
      current: {} as any,
    },
  },
});

export const SelectContextProvider = SelectContext.Provider;

export const useSelectContext = () => useContext(SelectContext);
