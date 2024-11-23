import Header from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";
import {
  CardHeader,
  CardFooter,
  Card,
} from "@/components/ui/card";
const ErrorCard = () => {
    return <Card className="w-[400px] shadow-md">
        <CardHeader>
            <Header label="Oops! something went wrong!" />
            <CardFooter>
                <BackButton href="/auth/login" label="Back to login" />
            </CardFooter>
      </CardHeader>
  </Card>;
};

export default ErrorCard;
