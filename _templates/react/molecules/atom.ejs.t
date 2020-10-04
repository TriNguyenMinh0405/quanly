---
to: src/components/molecules/<%= name %>/index.tsx
---
import React from 'react';
import { customModifier } from 'functions';
export interface <%= name %>Props{};
const <%= name %>: React.FC< <%= name %>Props > = (props) => {
    return (<div className={customModifier('m-<%= name.toLowerCase() %>')}>normal</div>)
};
export default <%= name %>;