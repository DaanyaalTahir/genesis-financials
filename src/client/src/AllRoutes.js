import HomePage from "./pages/HomePage";
import StatementPage from "./pages/StatementPage";
import SendMoneyPage from "./pages/SendMoneyPage";

export const routes = [
  { component: <HomePage />, path: "/" },
  { component: <SendMoneyPage />, path: "/send_money" },
  { component: <StatementPage />, path: "/statement" },
];
