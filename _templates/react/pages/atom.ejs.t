---
to: src/components/pages/<%= name %>/index.tsx
---
import React from 'react';
import { customModifier } from 'functions';
import './index.scss';
export interface <%= name %>Props{};
const <%= name %>: React.FC< <%= name %>Props > = (props) => {
    return (<div className={customModifier('p-<%= name.toLowerCase() %>')}>normal</div>)
};
export default <%= name %>;