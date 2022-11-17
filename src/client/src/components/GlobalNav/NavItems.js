import {
  FileOutlined,
  DashboardOutlined,
  SendOutlined,
  FileTextOutlined,
  BulbOutlined,
  PhoneOutlined
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
  getItem("Insights", "/insights", <BulbOutlined />),
  getItem("Send Money", "/send_money", <SendOutlined />),
  getItem("Statements", "/statement", <FileOutlined />),
  getItem("Loans", "/loans", <FileTextOutlined />),
  getItem("Contact", "/contact", <PhoneOutlined />),
];
