import { Form } from "./Form";

export default {
    title: "Component/Form",
    component: Form
}

const Template = (args) => <Form {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    
}