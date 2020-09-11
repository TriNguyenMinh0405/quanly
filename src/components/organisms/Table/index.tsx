import React from 'react';
import './index.scss';
import VerticalTable from 'components/molecules/VerticalTable';
import Img from 'components/atoms/Img';
import Text from 'components/atoms/Text';
import Button from 'components/atoms/Button';
import * as Actions from 'actions/admin/user';
import { useDispatch, useSelector } from 'react-redux';
const Table: React.FC = () => {
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
                        <VerticalTable key={index}>
                            <Img src="https://i.ytimg.com/vi/XTgHqqbWEYI/maxresdefault.jpg" />
                            <Text>tien1234</Text>
                            <Text>Nguyen minh tien</Text>
                            <div>
                                <Button
                                    modifier="around"
                                    background="sky"
                                    type="button"
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
