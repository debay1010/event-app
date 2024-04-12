import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

export const Header = () => {
	return (
		<header className="w-full border-b">
			<div className="wrapper flex items-center justify-between">
				<Link href="/" className=" w-36">
					<Image
						src="/assets/images/logo.svg"
						alt="logo"
						width={128}
						height={38}
					/>
				</Link>

				<SignedIn>
					<nav className="hidden md:flex-between w-full max-w-sm">
						<NavItems />
					</nav>
				</SignedIn>
				<div className="flex w-32 justify-end space-x-2">
					<SignedIn>
						<UserButton afterSignOutUrl="/" />
						<MobileNav />
					</SignedIn>

					<SignedOut>
						<Button
							asChild
							className="hover:bg-slate-500 rounded-full"
							size="sm"
						>
							<Link href="/sign-in" className="">
								Login
							</Link>
						</Button>
					</SignedOut>
				</div>
			</div>
		</header>
	);
};
