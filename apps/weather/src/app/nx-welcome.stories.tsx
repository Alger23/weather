import { Story, Meta } from '@storybook/react';
import { NxWelcome } from './nx-welcome';

export default {
  component: NxWelcome,
  title: 'NxWelcome',
} as Meta;

const Template: Story = ({title, ...args}) =>
  <NxWelcome title={title} {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
