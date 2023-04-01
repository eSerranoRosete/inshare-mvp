import { type NextPage } from "next";

import * as App from "@/components/AppShell";

const Studio: NextPage = () => {
  return (
    <App.AppShell>
      <App.AppContent>
        <App.AppHeader heading="Studio" />
      </App.AppContent>
    </App.AppShell>
  );
};

export default Studio;
