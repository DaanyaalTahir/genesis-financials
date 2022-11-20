import HomePage from "./pages/HomePage";
import StatementPage from "./pages/StatementPage";
import SendMoneyPage from "./pages/SendMoneyPage";
import InsightsPage from "./pages/InsightsPage";
import LoansPage from "./pages/LoansPage"
import ContactPage from "./pages/ContactPage"


export const routes = [
  { component: <HomePage />, path: "/" },
  { component: <SendMoneyPage />, path: "/send_money" },
  { component: <StatementPage />, path: "/statement" },
  { component: <InsightsPage />, path: "/insights" },
  { component: <LoansPage />, path: "/loans" },
  { component: <ContactPage />, path: "/contact" },
];
