import { Button } from "flowbite-react";
import { signIn } from "next-auth/react";
import React from "react";

const LoginButton = () => {
	return (
		<Button
			outline
			onClick={() =>
				signIn("id-server", { callbackUrl: "/" }, { prompt: "login" })
			}
			className="w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-300"
		>
			Login
		</Button>
	);
};

export default LoginButton;
