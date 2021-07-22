import { AtlasSelect } from "./Select";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Select",
    component: AtlasSelect,
} as ComponentMeta<typeof AtlasSelect>;

const Template: ComponentStory<typeof AtlasSelect> = (args) => <AtlasSelect {...args} />;

let options = [
    { value: 1, label: "Hopper" },
    { value: 2, label: "Holberton" },
    { value: 3, label: "Antonelli" },
    { value: 5, label: "Bartik" },
    { value: 6, label: "Taitelbaum" },
    { value: 7, label: "Snake" },
    { value: 8, label: "Turtle" },
    { value: 9, label: "Wombat" },
];
let optionsWithDisabled = [
    { value: 1, label: "Hopper" },
    { value: 2, label: "Holberton", isDisabled: true },
    { value: 3, label: "Dog" },
    { value: 4, label: "Antonelli" },
    { value: 5, label: "Bartik", isDisabled: true },
    { value: 6, label: "Taitelbaum", isDisabled: true },
    { value: 7, label: "Snake" },
    { value: 8, label: "Turtle" },
    { value: 9, label: "Wombat" },
];

let optionsWithDescription = [
    { value: 1, label: "Hopper", description: "Grace hopper was an american computer scientist and US Navy rear admiral." },
    { value: 2, label: "Holberton", description: "Grace hopper was an american computer scientist and US Navy rear admiral." },
    { value: 3, label: "Dog", description: "Grace hopper was an american computer scientist and US Navy rear admiral." },
    { value: 4, label: "Antonelli", description: "Grace hopper was an american computer scientist and US Navy rear admiral." },
    { value: 5, label: "Bartik", description: "Grace hopper was an american computer scientist and US Navy rear admiral." },
    { value: 6, label: "Taitelbaum", description: "Grace hopper was an american computer scientist and US Navy rear admiral." },
    { value: 7, label: "Snake", description: "Grace hopper was an american computer scientist and US Navy rear admiral." },
    { value: 8, label: "Turtle", description: "Grace hopper was an american computer scientist and US Navy rear admiral." },
    { value: 9, label: "Wombat", description: "Grace hopper was an american computer scientist and US Navy rear admiral." },
];
let optionsWithVeryLongDescription = [
    { value: 1, label: "Hopper", description: "Grace hopper was an american computer scientist and US Navy rear admiral., Grace hopper was an american computer scientist and US Navy rear admiral., Grace hopper was an american computer scientist and US Navy rear admiral." },
    { value: 2, label: "Holberton", description: "Grace hopper was an american computer scientist and US Navy rear admiral., Grace hopper was an american computer scientist and US Navy rear admiral., Grace hopper was an american computer scientist and US Navy rear admiral." },
    { value: 3, label: "Dog", description: "Grace hopper was an american computer scientist and US Navy rear admiral., Grace hopper was an american computer scientist and US Navy rear admiral., Grace hopper was an american computer scientist and US Navy rear admiral." },
    { value: 4, label: "Antonelli", description: "Grace hopper was an american computer scientist and US Navy rear admiral., Grace hopper was an american computer scientist and US Navy rear admiral., Grace hopper was an american computer scientist and US Navy rear admiral." },
    { value: 5, label: "Bartik", description: "Grace hopper was an american computer scientist and US Navy rear admiral., Grace hopper was an american computer scientist and US Navy rear admiral., Grace hopper was an american computer scientist and US Navy rear admiral." },
    { value: 6, label: "Taitelbaum", description: "Grace hopper was an american computer scientist and US Navy rear admiral., Grace hopper was an american computer scientist and US Navy rear admiral., Grace hopper was an american computer scientist and US Navy rear admiral." },
    { value: 7, label: "Snake", description: "Grace hopper was an american computer scientist and US Navy rear admiral., Grace hopper was an american computer scientist and US Navy rear admiral., Grace hopper was an american computer scientist and US Navy rear admiral." },
    { value: 8, label: "Turtle", description: "Grace hopper was an american computer scientist and US Navy rear admiral., Grace hopper was an american computer scientist and US Navy rear admiral., Grace hopper was an american computer scientist and US Navy rear admiral." },
    { value: 9, label: "Wombat", description: "Grace hopper was an american computer scientist and US Navy rear admiral., Grace hopper was an american computer scientist and US Navy rear admiral., Grace hopper was an american computer scientist and US Navy rear admiral." },
];

let optionsWithSection = [
    {
        label: "animals",
        options: [
            { value: 1, label: "Hopper" },
            { value: 2, label: "Holberton" },
            { value: 3, label: "Dog" },
            { value: 4, label: "Antonelli" },
            { value: 5, label: "Bartik" },
        ],
    },
    {
        label: "people",
        options: [
            { value: 6, label: "Taitelbaum" },
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
            { value: 1, label: "Hopper", description: "Grace hopper was an american computer scientist and US Navy rear admiral." },
            { value: 2, label: "Holberton", description: "Grace hopper was an american computer scientist and US Navy rear admiral." },
            { value: 3, label: "Dog", description: "Grace hopper was an american computer scientist and US Navy rear admiral." },
            { value: 4, label: "Antonelli", description: "Grace hopper was an american computer scientist and US Navy rear admiral." },
            { value: 5, label: "Bartik", description: "Grace hopper was an american computer scientist and US Navy rear admiral." },
        ],
    },
    {
        label: "people",
        options: [
            { value: 6, label: "Taitelbaum", description: "Grace hopper was an american computer scientist and US Navy rear admiral." },
            { value: 7, label: "Snake", description: "Grace hopper was an american computer scientist and US Navy rear admiral." },
            { value: 8, label: "Turtle", description: "Grace hopper was an american computer scientist and US Navy rear admiral." },
            { value: 9, label: "Wombat", description: "Grace hopper was an american computer scientist and US Navy rear admiral." },
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
