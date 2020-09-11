import React from 'react';
import './index.scss';
const VerticalTable: React.FC = ({ children }) => {
    return (
        <tr className="m-verticaltable">
            {React.Children.map(children, (item, index) => {
                return (
                    <td className="m-verticaltable_td" key={`item-${index}`}>
                        {item}
                    </td>
                );
            })}
        </tr>
    );
};
export default VerticalTable;
