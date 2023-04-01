import { type NextPage } from "next";

import * as App from "@/components/AppShell";

const Analytics: NextPage = () => {
  return (
    <App.AppShell>
      <App.AppContent>
        <App.AppHeader heading="Analytics" />
      </App.AppContent>
    </App.AppShell>
  );
};

export default Analytics;
