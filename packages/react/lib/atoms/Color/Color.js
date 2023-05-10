import React from 'react';
import Spacing from '../../foundation/Spacing.js';

const Color = ({ hexCode, width = Spacing.sm, height = Spacing.sm, }) => {
    const className = `xq-width-${width} xq-height-${height}`;
    return (React.createElement("div", { className: className, style: {
            backgroundColor: hexCode,
            width,
            height,
        } }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
