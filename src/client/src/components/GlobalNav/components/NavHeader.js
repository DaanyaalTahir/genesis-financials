import React from "react";
import { Layout, Typography, Menu, Avatar } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../state/Reducers/userReducer";

const { Header } = Layout;
const { Title } = Typography;

function NavHeader() {
  const dispatch = useDispatch();

  const fName = useSelector((state) => state.user.FName);
  const lName = useSelector((state) => state.user.LName);

  const items = [
    {
      label: `${fName} ${lName}`,
      key: "user",
      icon: <Avatar icon={<UserOutlined />} />,
      children: [
        {
          label: "Logout",
          key: "logout",
          icon: <LogoutOutlined />,
        },
      ],
    },
  ];

  const onClick = (e) => {
    console.log(e.key);
    if (e.key === "logout") {
      dispatch(logout());
    }
  };

  return (
    <Header
      className="site-layout-background NavHeader_Cont"
      style={{
        padding: 0,
      }}
    >
      <Title level={3} className="NavHeader_Title">
        Genesis Financials
      </Title>
      <Menu onClick={onClick} mode="horizontal" items={items} />
    </Header>
  );
}

export default NavHeader;
