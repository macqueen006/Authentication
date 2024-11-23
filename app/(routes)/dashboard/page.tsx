import { auth } from "@/auth";

const DashboardPage = () => {
  const session = auth;
  return <div>{JSON.stringify(session)}</div>;
};

export default DashboardPage;
