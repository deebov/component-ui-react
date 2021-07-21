# AtlasSelect

A React Select component

**Main Features:**
- Accessible (follows WAI-ARIA guidelines)
- Headless - the core primitive components has 0 styling. Which makes it possible to build very custom Select component. We provide the behavior, you decide on the styling 😉

## How to use

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