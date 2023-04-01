import { type NextPage } from "next";

import * as App from "@/components/AppShell";

const Interactions: NextPage = () => {
  return (
    <App.AppShell>
      <App.AppContent>
        <App.AppHeader heading="Interactions" />
      </App.AppContent>
    </App.AppShell>
  );
};

export default Interactions;
