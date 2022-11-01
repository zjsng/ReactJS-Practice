import { Footer } from "./Footer";

export default {
    title: "Component/Footer",
    component: Footer
}

const Template = (args) => <Footer {...args} />;

export const Basic = Template.bind({});
Basic.args = { }