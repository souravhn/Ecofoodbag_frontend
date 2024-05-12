import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useGetMyUser } from "@/api/MyUserApi";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();

  console.log(currentUser);

  if (isGetUserLoading) {
    return <></>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 font-bold hover:text-green-500">
        <CircleUserRound className="text-green-500" />
        {user?.name}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          {currentUser?.isVendor ? (
            <Link
              to="/manage-restaurant"
              className="font-bold hover:text-green-500"
            >
              Manage Restaurant
            </Link>
          ) : (
            <Link
              to="/become-vendor"
              className="font-bold hover:text-green-500"
            >
              Become a Vendor
            </Link>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/user-profile" className="font-bold hover:text-green-500">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="flex flex-1 font-bold bg-green-500"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
