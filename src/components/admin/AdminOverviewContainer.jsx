import React from "react";
import AdminOverview from "./AdminOverview";
import { AdminProviders } from "../AdminProviders";

export class AdminOverviewContainer extends React.Component {
  render() {
    return (
      <AdminProviders>
        <AdminOverview />
      </AdminProviders>
    );
  }
}
