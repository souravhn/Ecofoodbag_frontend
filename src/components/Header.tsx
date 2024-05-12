import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import logo from "/logo.svg";

const Header = () => {
	return (
		<div className='py-4 border-b-2 border-b-green-500'>
			<div className='container flex items-center justify-between mx-auto'>
				<Link
					to='/'
					className='text-3xl font-bold tracking-tight text-green-500'>
					<img src={logo} alt='logo' width={140} />
				</Link>
				<div className='md:hidden'>
					<MobileNav />
				</div>
				<div className='hidden md:block'>
					<MainNav />
				</div>
			</div>
		</div>
	);
};

export default Header;
