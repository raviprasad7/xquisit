import React from 'react';
import Spacing from '../../foundation/Spacing';

import '@xquisit/scss/lib/Image.css';

interface ImageProps {
  src: string;
  width?: keyof typeof Spacing;
  height?: keyof typeof Spacing;
}

const Image: React.FC<ImageProps> = ({
  src,
  width = Spacing.lg,
  height = Spacing.lg,
}) => {
  const className = `xq-image-container xq-width-${width} xq-height-${height}`;

  return <img className={className} src={src} />;
};

export default Image;
