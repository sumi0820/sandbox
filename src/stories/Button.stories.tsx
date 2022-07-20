import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Outlined = Template.bind({});
Default.args = {
  outlined: true,
  children: 'Button',
};

export const Small = Template.bind({});
Default.args = {
  size: 'small',
  children: 'Button',
};

export const OutlinedSmall = Template.bind({});
Default.args = {
  outlined: true,
  size: 'small',
  children: 'Button',
};
