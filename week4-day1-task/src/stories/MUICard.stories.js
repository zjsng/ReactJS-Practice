import { MUICard } from "./MUICard";

export default {
    title: "Component/MUICard",
    component: MUICard
}

const Template = (args) => <MUICard {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    title: "Default Title",
    body: "Default Content"
}