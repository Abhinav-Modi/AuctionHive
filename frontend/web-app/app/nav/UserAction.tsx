import { Dropdown, DropdownDivider, DropdownItem } from "flowbite-react";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
//import { useRouter } from "next/navigation";

import React from "react";
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from "react-icons/ai";
import { HiCog, HiUser } from "react-icons/hi";

type Props = {
	user: User;
};

const UserAction = ({ user }: Props) => {
	// const route = useRouter();
	return (
		<Dropdown inline label={`Hello, ${user.name}`}>
			<DropdownItem icon={HiUser}>
				<Link href="/">My Auctions</Link>
			</DropdownItem>
			<DropdownItem icon={AiFillTrophy}>
				<Link href="/">Auctions Won</Link>
			</DropdownItem>
			<DropdownItem icon={AiFillCar}>
				<Link href="/">Sell Your Car</Link>
			</DropdownItem>
			<DropdownItem icon={HiCog}>
				<Link href="/sessions">Session Dev ONLY</Link>
			</DropdownItem>
			<DropdownDivider />
			<DropdownItem
				icon={AiOutlineLogout}
				onClick={() => signOut({ callbackUrl: "/" })}
			>
				Log Out
			</DropdownItem>
		</Dropdown>
	);
};

export default UserAction;
