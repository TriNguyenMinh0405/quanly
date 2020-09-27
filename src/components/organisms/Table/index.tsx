import React from 'react';
import './index.scss';
import VerticalTable from 'components/molecules/VerticalTable';
import Img from 'components/atoms/Img';
import Text from 'components/atoms/Text';
import Button from 'components/atoms/Button';
import * as Actions from 'actions/admin/user';
import { useDispatch, useSelector } from 'react-redux';
interface TableProps {
    eventClickTd?: (arg?: number | string) => void;
    eventClickButton?: (
        event?: React.MouseEvent<HTMLButtonElement>,
        arg?: string | number
    ) => void;
}
const Table: React.FC<TableProps> = ({ eventClickTd, eventClickButton }) => {
    const user = useSelector((state) => {
        return state;
    });
    const userDispatch = useDispatch();
    return (
        <table className="o-table">
            <thead>
                <tr className="m-verticaltable">
                    <th
                        className="m-verticaltable_td"
                        onClick={() => userDispatch(Actions.getListUserApi())}
                    >
                        Hình Ảnh
                    </th>
                    <th
                        onClick={() => console.log(user)}
                        className="m-verticaltable_td"
                    >
                        Tài khoản
                    </th>
                    <th className="m-verticaltable_td">Tên</th>
                    <th className="m-verticaltable_td">Thêm người dùng</th>
                </tr>
            </thead>
            <tbody>
                {['1', '2', '3', '4', '5', '6', '7'].map((item, index) => {
                    return (
                        <VerticalTable
                            handleClickTd={() =>
                                eventClickTd && eventClickTd(index)
                            }
                            key={index}
                        >
                            <Img src="https://i.ytimg.com/vi/XTgHqqbWEYI/maxresdefault.jpg" />
                            <Text>tien1234</Text>
                            <Text>Nguyen minh tien</Text>
                            <div>
                                <Button
                                    modifier="around"
                                    background="sky"
                                    type="button"
                                    handleClick={(
                                        event?: React.MouseEvent<
                                            HTMLButtonElement
                                        >
                                    ) =>
                                        eventClickButton &&
                                        eventClickButton(event, index)
                                    }
                                >
                                    Detail
                                </Button>
                                <Button
                                    modifier="around"
                                    background="red"
                                    type="button"
                                >
                                    Delete
                                </Button>
                            </div>
                        </VerticalTable>
                    );
                })}
            </tbody>
        </table>
    );
};
export default Table;
