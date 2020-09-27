import React from 'react';
import { customModifier } from 'functions';
export interface LoadingProps {}
const Loading: React.FC<LoadingProps> = (props) => {
    return (
        <div className="loading-wrap">
            <div className={customModifier('a-loading')}>normal</div>
        </div>
    );
};
export default Loading;
