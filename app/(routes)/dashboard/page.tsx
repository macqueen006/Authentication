import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const DashboardPage = async () => {
  const session = await auth();
  
  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <p>{ session?.user.id}</p>
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
};

export default DashboardPage;
