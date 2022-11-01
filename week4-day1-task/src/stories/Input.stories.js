import { Input } from "./Component";

export default {
    title: "Component/Input",
    component: Input,
    argTypes: {
        color: {control: "color"},
        handleChange: {}
    }
}

const Template = (args) => <Input {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    label: "Normal: ",
    placeholder: "Enter some data"
}

export const Advanced = Template.bind({});
Advanced.args = {
    label: "Advanced: ",
    placeholder: "Advanced"
}