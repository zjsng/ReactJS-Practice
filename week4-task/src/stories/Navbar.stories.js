import { Navbar } from "./Navbar";
import { MemoryRouter } from 'react-router-dom';

export default {
  title: "Component/Navbar",
  component: Navbar,
  decorators: [
    (Navbar) => (
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
  ],
}

const Template = (args) => <Navbar {...args} />;

export const Standard = Template.bind({});
Standard.args = {}