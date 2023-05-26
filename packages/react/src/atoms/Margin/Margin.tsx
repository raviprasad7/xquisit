import React from 'react';
import { Spacing } from '../..';

import '@xquisit/scss/lib/Margin.css';

interface MarginProps {
  children?: React.ReactNode;
  space?: keyof typeof Spacing;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
}

const Margin: React.FC<MarginProps> = ({
  children,
  space = 'xxxs',
  left,
  right,
  top,
  bottom,
}) => {
  let className;

  if (!left && !right && !top && !bottom) {
    className = `xq-margin-${space}`;
  }

  if (left) {
    className = `xq-margin-${left}-${space}`;
  }

  if (right) {
    className = `xq-margin-${right}-${space}`;
  }

  if (top) {
    className = `xq-margin-${top}-${space}`;
  }

  if (bottom) {
    className = `xq-margin-${bottom}-${space}`;
  }

  return <div className={className}>{children}</div>;
};

export default Margin;
