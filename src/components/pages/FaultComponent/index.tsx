import React from 'react';
import { customModifier } from 'functions';
import './index.scss';
export interface FaultComponentProps {}
const FaultComponent: React.FC<FaultComponentProps> = (props) => {
    return <h1 className={customModifier('a-faultcomponent')}>Not Found</h1>;
};
export default FaultComponent;
