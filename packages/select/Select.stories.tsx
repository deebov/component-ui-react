import { AtlasSelect } from "./Select";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Select",
    component: AtlasSelect,
} as ComponentMeta<typeof AtlasSelect>;

const Template: ComponentStory<typeof AtlasSelect> = (args) => <AtlasSelect {...args} />;

let options = [
    { value: 1, label: "Aardvark" },
    { value: 2, label: "Cat" },
    { value: 3, label: "Dog" },
    { value: 4, label: "Kangaroo" },
    { value: 5, label: "Koala" },
    { value: 6, label: "Penguin" },
    { value: 7, label: "Snake" },
    { value: 8, label: "Turtle" },
    { value: 9, label: "Wombat" },
];
let optionsWithDisabled = [
    { value: 1, label: "Aardvark" },
    { value: 2, label: "Cat", isDisabled: true },
    { value: 3, label: "Dog" },
    { value: 4, label: "Kangaroo" },
    { value: 5, label: "Koala", isDisabled: true },
    { value: 6, label: "Penguin", isDisabled: true },
    { value: 7, label: "Snake" },
    { value: 8, label: "Turtle" },
    { value: 9, label: "Wombat" },
];

let optionsWithDescription = [
    { value: 1, label: "Aardvark", description: "This is a description" },
    { value: 2, label: "Cat", description: "This is a description" },
    { value: 3, label: "Dog", description: "This is a description" },
    { value: 4, label: "Kangaroo", description: "This is a description" },
    { value: 5, label: "Koala", description: "This is a description" },
    { value: 6, label: "Penguin", description: "This is a description" },
    { value: 7, label: "Snake", description: "This is a description" },
    { value: 8, label: "Turtle", description: "This is a description" },
    { value: 9, label: "Wombat", description: "This is a description" },
];
let optionsWithVeryLongDescription = [
    { value: 1, label: "Aardvark", description: "This is a description, This is a description, This is a description" },
    { value: 2, label: "Cat", description: "This is a description, This is a description, This is a description" },
    { value: 3, label: "Dog", description: "This is a description, This is a description, This is a description" },
    { value: 4, label: "Kangaroo", description: "This is a description, This is a description, This is a description" },
    { value: 5, label: "Koala", description: "This is a description, This is a description, This is a description" },
    { value: 6, label: "Penguin", description: "This is a description, This is a description, This is a description" },
    { value: 7, label: "Snake", description: "This is a description, This is a description, This is a description" },
    { value: 8, label: "Turtle", description: "This is a description, This is a description, This is a description" },
    { value: 9, label: "Wombat", description: "This is a description, This is a description, This is a description" },
];

let optionsWithSection = [
    {
        label: "animals",
        options: [
            { value: 1, label: "Aardvark" },
            { value: 2, label: "Cat" },
            { value: 3, label: "Dog" },
            { value: 4, label: "Kangaroo" },
            { value: 5, label: "Koala" },
        ],
    },
    {
        label: "people",
        options: [
            { value: 6, label: "Penguin" },
            { value: 7, label: "Snake" },
            { value: 8, label: "Turtle" },
            { value: 9, label: "Wombat" },
        ],
    },
];

let optionsWithSectionAndDesc = [
    {
        label: "animals",
        options: [
            { value: 1, label: "Aardvark", description: "This is a description" },
            { value: 2, label: "Cat", description: "This is a description" },
            { value: 3, label: "Dog", description: "This is a description" },
            { value: 4, label: "Kangaroo", description: "This is a description" },
            { value: 5, label: "Koala", description: "This is a description" },
        ],
    },
    {
        label: "people",
        options: [
            { value: 6, label: "Penguin", description: "This is a description" },
            { value: 7, label: "Snake", description: "This is a description" },
            { value: 8, label: "Turtle", description: "This is a description" },
            { value: 9, label: "Wombat", description: "This is a description" },
        ],
    },
];
export const Simple: typeof Template = Template.bind({});
Simple.args = {
    options: options,
};

export const DefaultSelected: typeof Template = Template.bind({});
DefaultSelected.args = {
    defaultValue: 3,
    options,
};

export const DefaultOpen: typeof Template = Template.bind({});
DefaultOpen.args = {
    defaultOpen: true,
    options,
};

export const Disabled: typeof Template = Template.bind({});
Disabled.args = {
    isDisabled: true,
    options,
};

export const WithDisabledOptions: typeof Template = Template.bind({});
WithDisabledOptions.args = {
    options: optionsWithDisabled,
};

export const WithDescription: typeof Template = Template.bind({});
WithDescription.args = {
    options: optionsWithDescription,
};

export const WithVeryLongDescription: typeof Template = Template.bind({});
WithVeryLongDescription.args = {
    options: optionsWithVeryLongDescription,
};

export const Sections: typeof Template = Template.bind({});
Sections.args = {
    options: optionsWithSection,
};

export const SectionsWithDescription: typeof Template = Template.bind({});
SectionsWithDescription.args = {
    options: optionsWithSectionAndDesc,
};
