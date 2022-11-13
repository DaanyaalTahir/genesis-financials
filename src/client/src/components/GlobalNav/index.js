import { Layout, Menu } from "antd";
import React, { useState } from "react";
import GFLogo from "../GFLogo";
import { navItems } from "./NavItems";
import NavHeader from "./components/NavHeader";
import { useNavigate } from "react-router-dom";

import "./GlobalNav.scss";

const { Content, Footer, Sider } = Layout;

const GlobalNav = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const onNavItemClicked = (key) => {
    navigate(key);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
      className="GlobalNav_Cont"
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo">
          <GFLogo mode="light" />
          {/* <div className="title">
            Genesis <br /> Financials
          </div> */}
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["/"]}
          mode="inline"
          items={navItems}
          onClick={(item) => {
            onNavItemClicked(item.key);
          }}
        />
      </Sider>
      <Layout className="site-layout">
        <NavHeader />
        <Content
          style={{
            margin: "0 16px",
            marginTop: "20px",
          }}
        >
          <div>{children}</div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Genesis Financials ©2022 Created by Alpha Inc.
        </Footer>
      </Layout>
    </Layout>
  );
};
export default GlobalNav;
