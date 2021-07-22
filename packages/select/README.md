# AtlasSelect

A React Select component

**Main Features:**
- **Accessible** (follows WAI-ARIA guidelines)
- **Headless** - the core primitive components has 0 styling. Which makes it possible to build very custom Select component. We provide the behavior, you decide on the styling 😉

## Usage

> You'll find more examples of how to use AtlasSelect in the storybook.

### Simple

```jsx
import {AtlasSelect} from '@atlas-ui/react'

<AtlasSelect options={[
    { value: 1, label: "Aardvark" },
    { value: 2, label: "Cat" },
    { value: 3, label: "Dog" },
    { value: 4, label: "Kangaroo" },
    { value: 5, label: "Koala" }
]}>
```

### With description

```jsx
<AtlasSelect options={[
    { value: 1, label: "Aardvark", description: "This is a description" },
    { value: 2, label: "Cat", description: "This is a description" },
    { value: 3, label: "Dog", description: "This is a description" },
    { value: 4, label: "Kangaroo", description: "This is a description" }
]}>
```

### With disabled options

```jsx
<AtlasSelect options={[
    { value: 1, label: "Aardvark", isDisabled: true },
    { value: 2, label: "Cat", isDisabled: true },
    { value: 3, label: "Dog" },
    { value: 4, label: "Kangaroo" }
]}>
```

### With sections

```jsx
<AtlasSelect options={[
    {
        label: "animals",
        options: [
            { value: 1, label: "Aardvark" },
            { value: 2, label: "Cat" },
        ],
    },
    {
        label: "people",
        options: [
            { value: 6, label: "Penguin" },
            { value: 7, label: "Snake" },
            { value: 8, label: "Turtle" },
        ],
    },
]}>
```

## Props

| Name          | Description                                                                                | type                   | default               |
|---------------|--------------------------------------------------------------------------------------------|------------------------|-----------------------|
| options       | Array of options to display. It can either be an array of `TOptions` or `TOption`.           | TOption[] \| TOptions[]  |                       |
| value?        | The selected value. If provided, the Select will be a controlled component.                | string                 |                       |
| defaultValue? | The default selected value.                                                                | string                 |                       |
| defaultOpen?  | If `true`, the listbox will be open by default.                                            | boolean                | false                 |
| placeholder?  | A string value that will be displayed when no option is selected.                          | string                 | "Select an option..." |
| isDisabled?   | If `true`, the select will ignore user interactions and sets `disabled` attribute to true. |                        |                       |
| onChange?     | A callback that fires whenever the select state changes.                                   | (value: string | number) => void |                       |

### Types

#### TOption

| Name: type           | Description                                                                |
|----------------------|----------------------------------------------------------------------------|
| label: string        | A label for an option that will be displayed.                              |
| value: React.Key     | A unique string or number value                                            |
| description?: string | Description of an option that will be displayed in lower visual hierarchy. |
| isDisabled?: boolean | If `true`, the option cannot be selected.                                  |


#### TOptions

| Name: type           | Description                                                                |
|----------------------|----------------------------------------------------------------------------|
| label: string        | A label for screen-readers. This won't be displayed.                               |
| options: TOption[]   | Array of options                                            |