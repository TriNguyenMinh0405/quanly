import React from 'react';
import { customModifier } from 'functions';
export interface TableProps {}
const Table: React.FC<TableProps> = (props) => {
    return (
        <div className={customModifier('m-table')}>
            <table>
                <thead>
                    <th>Name Criteria</th>
                    <th>Phase1</th>
                    <th>Phase2</th>
                    <th>Phase3</th>
                    <th>Phase4</th>
                    <th>Phase5</th>
                    <th>Total</th>
                </thead>
            </table>
        </div>
    );
};
export default Table;
