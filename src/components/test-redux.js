import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Users } from '../stores/User/Selector'
import { loadUsers } from "../stores/User/Action";
import { Table, Pagination } from 'antd'

const TestRedux = ({ users, loadUsers, totalUsers }) => {
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
    ];
    const pageDefault = 1
    const handlePagination = (page) => {
        loadUsers(page)
    }
    useEffect(() => {
        loadUsers(pageDefault)
    }, [])
    return (
        <>
            <Table dataSource={users} columns={columns} rowKey="id"/>
            <Pagination defaultCurrent={1} total={totalUsers} onChange={handlePagination}/>
        </>
    );
};
const mapStateToProps = (state) => ({
    users: Users.users(state),
    totalUsers: Users.totalUsers(state),
})
const mapDispatchToProps = (dispatch) => ({
    loadUsers: (page) => dispatch(loadUsers(page))
})
export default connect(mapStateToProps, mapDispatchToProps)(TestRedux);