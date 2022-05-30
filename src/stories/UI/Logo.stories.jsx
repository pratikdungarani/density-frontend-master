import React from "react";

import { Logo } from "../../components/ui/Logo";

export default {
  title: "Density Logo",
  component: Logo,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centred"
  }
};

const Template = () => <Logo />;

export const DensityLogo = Template.bind({});
