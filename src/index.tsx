import 'tailwindcss/dist/base.min.css';

import React, { FC, HTMLAttributes, ReactChild } from 'react';
import tw, { styled } from 'twin.macro';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
export const Thing: FC<Props> = ({ children }) => {
  const Component = styled.div`
    ${tw`bg-red-300`};
  `;

  return (
    <Component>
      {children || `the snozzberries taste like snozzberries`}
    </Component>
  );
};
