import { Dropdown, DropdownDivider, DropdownItem } from "flowbite-react";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React from "react";
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from "react-icons/ai";
import { HiCog, HiUser } from "react-icons/hi";
import { useParamsStore } from "../hooks/useParamsStore";

type Props = {
	user: User;
};

const UserAction = ({ user }: Props) => {
	const router = useRouter();
	const pathname = usePathname();
	const setParams = useParamsStore((state) => state.setParams);
	const username =
		user.username ||"Unknown User";
		function setWinner() {
			setParams({ winner: username, seller: undefined });
			console.log("winner", username);
			if (pathname !== "/") {
				router.push("/");
			}
		};
	function setSeller() {
		setParams({ seller: username, winner: undefined });
		console.log("seller", username);
		if (pathname !== "/") {
			router.push("/");
		}
	}
	return (
		<Dropdown inline label={`Hello, ${user.name}`}>
			<DropdownItem icon={HiUser} onClick={setSeller}>
				My Auctions
			</DropdownItem>
			<DropdownItem icon={AiFillTrophy} onClick={setWinner}>
				Auctions Won
			</DropdownItem>
			<DropdownItem icon={AiFillCar}>
				<Link href="/auctions/create">Sell Your Car</Link>
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
