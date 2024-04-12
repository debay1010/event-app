import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="bordoer-t">
			<div className="wrapper  w-full flex-between flex-col sm:flex-row p-5 gap-4 text-center">
				<Link href="/" className="">
					<Image
						src="/assets/images/logo.svg"
						alt="logo"
						width={128}
						height={24}
					/>
				</Link>
				<p className="">2024 Events. All right reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
