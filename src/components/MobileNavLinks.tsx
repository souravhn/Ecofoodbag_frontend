import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { useGetMyUser } from "@/api/MyUserApi";

const MobileNavLinks = () => {
	const { logout } = useAuth0();
	const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();

	console.log(currentUser);

	if (isGetUserLoading) {
		return <></>;
	}
	return (
		<>
			<Link
				to='/order-status'
				className='flex items-center font-bold bg-white hover:text-green-500'>
				Order Status
			</Link>
			{currentUser?.isVendor ? (
				<Link
					to='/manage-restaurant'
					className='font-bold hover:text-green-500'>
					Manage Restaurant
				</Link>
			) : (
				<Link to='/become-vendor' className='font-bold hover:text-green-500'>
					Become a Vendor
				</Link>
			)}
			<Link
				to='/user-profile'
				className='flex items-center font-bold bg-white hover:text-green-500'>
				User Profile
			</Link>
			<Button
				onClick={() => logout()}
				className='flex items-center px-3 font-bold hover:bg-gray-500'>
				Log Out
			</Button>
		</>
	);
};

export default MobileNavLinks;
