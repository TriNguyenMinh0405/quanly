import React from 'react';
import { customModifier } from 'functions';
import './index.scss';
import Button from 'components/atoms/Button';
export interface AdminLoginProps {}
const AdminLogin: React.FC<AdminLoginProps> = (props) => {
    return (
        <form className={customModifier('a-adminlogin')}>
            <input type="text" placeholder="User" />
            <input type="password" placeholder="Password" />
            <Button type="submit">Submit</Button>
        </form>
    );
};
export default AdminLogin;
