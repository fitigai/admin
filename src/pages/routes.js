import Dashboard from "./Dashboard"
import Users from "./Users"
import Activities from "./Activities"
import Logistic from "./Logistic"

export const routes = [
  {
    path: "/dashboard",
    exact: true,
    sidebar: () => <div>Dashboard!</div>,
    main: () => <Dashboard />
  },
  {
    path: "/users",
    sidebar: () => <div>Users!</div>,
    main: () => <Users />
  },
  {
    path: "/activities",
    sidebar: () => <div>Activities!</div>,
    main: () => <Activities />
  },
  {
    path: "/logistic",
    sidebar: () => <div>Logistic!</div>,
    main: () => <Logistic />
  }
]
