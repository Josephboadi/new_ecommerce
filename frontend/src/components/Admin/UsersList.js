import React, { Fragment, useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './productList.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { useAlert } from "react-alert";
import { Button } from '@material-ui/core';
import MetaData from '../layout/MetaData';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SideBar from './Sidebar';
import {
  getAllUsers,
  clearErrors,
  deleteUser,
} from '../../redux/actions/userAction';
import { DELETE_USER_RESET } from '../../redux/constants/userConstants';
import Notification from '../Notification';
import Navbar from './navbar/Navbar';

const UsersList = ({ history }) => {
  const dispatch = useDispatch();

  // const alert = useAlert();

  const { error, users } = useSelector((state) => state.allUsers);

  const {
    error: deleteError,
    isDeleted,
    message,
  } = useSelector((state) => state.profile);

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: '',
  });

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    if (error) {
      // alert.error(error);
      setNotify({
        isOpen: true,
        message: error,
        type: 'error',
      });
      dispatch(clearErrors());
    }

    if (deleteError) {
      // alert.error(deleteError);
      setNotify({
        isOpen: true,
        message: deleteError,
        type: 'error',
      });
      dispatch(clearErrors());
    }

    if (isDeleted) {
      // alert.success(message);
      setNotify({
        isOpen: true,
        message: message,
        type: 'success',
      });
      history.push('/admin/users');
      dispatch({ type: DELETE_USER_RESET });
    }

    dispatch(getAllUsers());
  }, [dispatch, error, deleteError, history, isDeleted, message]);

  const columns = [
    { field: 'id', headerName: 'User ID', minWidth: 180, flex: 0.5 },

    {
      field: 'email',
      headerName: 'Email',
      minWidth: 200,
      flex: 0.5,
    },
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 150,
      flex: 0.5,
    },

    {
      field: 'role',
      headerName: 'Role',
      type: 'number',
      minWidth: 150,
      flex: 0.3,
      cellClassName: (params) => {
        return params.getValue(params.id, 'role') === 'admin'
          ? 'greenColor'
          : 'redColor';
      },
    },

    {
      field: 'actions',
      flex: 0.3,
      headerName: 'Actions',
      minWidth: 150,
      type: 'number',
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/user/${params.getValue(params.id, 'id')}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteUserHandler(params.getValue(params.id, 'id'))
              }>
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  users &&
    users.forEach((item) => {
      rows.push({
        id: item._id,
        role: item.role,
        email: item.email,
        name: item.name,
      });
    });

  return (
    <Fragment>
      {/* <Navbar /> */}

      <MetaData title={`ALL USERS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL USERS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
      <Notification notify={notify} setNotify={setNotify} />
    </Fragment>
  );
};

export default UsersList;
