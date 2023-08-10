import logo from '../assets/logo.svg';


function NavBar() {

	return (
		<div className="flex justify-between font-semibold text-grey items-center my-2 mx-10 font-montserrat">
			<span className="flex justify-between items-center gap-14">
				<img src={logo} alt="logo" width="50" height="50" />
			</span>
		</div>
	);
};

export default NavBar;