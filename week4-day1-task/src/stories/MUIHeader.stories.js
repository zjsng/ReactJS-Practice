import { MUIHeader } from "./MUIHeader";

export default {
    title: "Component/MUIHeader",
    component: MUIHeader
}

const Template = (args) => <MUIHeader {...args} />;

export const Basic = Template.bind({});
Basic.args = { }