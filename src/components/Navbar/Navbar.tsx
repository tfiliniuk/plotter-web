import React, { useContext, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { AppRouters } from '../../constants/constants';
import AuthContext from '../../context/auth';

const { Header } = Layout;

type MenuProps = {
  title: string;
  path: string;
};

export const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const menu: MenuProps[] = useMemo(
    () => [
      {
        title: 'Home',
        path: AppRouters.HOME,
      },
      ...(isAuth
        ? [
            {
              title: 'Dashboard',
              path: AppRouters.DASHBOARD,
            },
          ]
        : []),
      ...(isAuth
        ? []
        : [
            {
              title: 'Login',
              path: AppRouters.LOGIN,
            },
          ]),
      ...(isAuth
        ? []
        : [
            {
              title: 'Registration',
              path: AppRouters.SIGN_UP,
            },
          ]),
    ],
    [isAuth]
  );

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['Home']}>
        {menu.map((item, index) => {
          return (
            <Menu.Item key={item.title}>
              <Link to={item.path}>{item.title}</Link>
            </Menu.Item>
          );
        })}
        {isAuth && (
          <Menu.Item key={'Logout'}>
            <button
              onClick={() => {
                navigate(AppRouters.HOME);
                logout();
              }}
            >
              Logout
            </button>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
};
