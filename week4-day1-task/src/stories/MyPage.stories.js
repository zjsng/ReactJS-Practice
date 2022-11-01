import { MyPage } from "./MyPage";

export default {
    title: "Component/MyPage",
    component: MyPage
}

const Template = (args) => <MyPage {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    
}