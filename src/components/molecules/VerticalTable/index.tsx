import React from 'react';
import './index.scss';
interface VarticalTableProps {
    handleClickTd?: (arg?: number | string) => void;
}
const VerticalTable: React.FC<VarticalTableProps> = ({
    children,
    handleClickTd,
}) => {
    return (
        <tr className="m-verticaltable">
            {React.Children.map(children, (item, index) => {
                return (
                    <td
                        onClick={() => handleClickTd && handleClickTd()}
                        className="m-verticaltable_td"
                        key={`item-${index}`}
                    >
                        {item}
                    </td>
                );
            })}
        </tr>
    );
};
export default VerticalTable;
