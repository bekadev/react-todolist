import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {AddItemForm} from '../AddItemForm';
import {action} from '@storybook/addon-actions';
import {EditableSpan} from '../EditableSpan';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TODOLIST/EditableSpan',
  component: EditableSpan,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: {
      description: 'clicked button'
    },
  },
} as ComponentMeta<typeof EditableSpan>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EditableSpan> = (args) => <EditableSpan {...args} />;

export const EditableSpanStories = Template.bind({});
EditableSpanStories.args = {
  onChange: action('clicked button'),
  value: 'Edit?'
};
