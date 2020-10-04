---
to: src/components/templates/<%= name %>/index.tsx
---
import React from 'react';
import { customModifier } from 'functions';
export interface <%= name %>Props{};
const <%= name %>: React.FC< <%= name %>Props > = (props) => {
    return (<div className={customModifier('t-<%= name.toLowerCase() %>')}>normal</div>)
};
export default <%= name %>;