import React from "react";
import { Form } from "./Form";
import { Provider } from "react-redux";
import { Store } from '../Store';

export default {
  title: "Component/Form",
  component: Form,
  decorators: [
    Form => 
    (
      <Provider store={Store}>
        <Form />
      </Provider>
    )
  ],
}

const Template = (args) => <Form {...args} />;

export const Standard = Template.bind({});
Standard.args = {}