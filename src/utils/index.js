import { lazy } from "react";
const Transactions = lazy(() => import("../component/Transactions"));
const TransactionDetailed = lazy(() =>
  import("../component/TransactionDetailed")
);
const Dashboard = lazy(() => import("../component/Dashboard"));
const Insight = lazy(() => import("../component/Insight"));
const Reports = lazy(() => import("../component/Reports"));
const Trade = lazy(() => import("../component/Trade"));

export const Data = [
  {
    id: 1,
    path: "/transactions",
    component: Transactions,
  },
  {
    id: 11,
    path: "/transaction-details/:id",
    component: TransactionDetailed,
  },
  {
    id: 2,
    path: "/dashboard",
    component: Dashboard,
  },
  {
    id: 3,
    path: "/insight",
    component: Insight,
  },
  {
    id: 4,
    path: "/reports",
    component: Reports,
  },
  {
    id: 5,
    path: "/trade",
    component: Trade,
  },
];
