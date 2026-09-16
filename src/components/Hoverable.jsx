import React, { useState } from 'react';

export default function Hoverable({ as = 'a', style, hoverStyle, children, ...rest }) {
  const [hover, setHover] = useState(false);
  const Tag = as;
  return (
    <Tag
      {...rest}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...style, ...(hover ? hoverStyle : null) }}
    >
      {children}
    </Tag>
  );
}
