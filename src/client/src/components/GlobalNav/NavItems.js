import {
  FileOutlined,
  DashboardOutlined,
  SendOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const navItems = [
  getItem("Dashboard", "/", <DashboardOutlined />),
  getItem("Send Money", "/send_money", <SendOutlined />),
  getItem("Statements", "/statement", <FileOutlined />),
];
