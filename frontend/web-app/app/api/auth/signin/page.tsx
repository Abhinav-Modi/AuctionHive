import EmptyFilter from "@/app/components/EmptyFilter";
import React from "react";

const SignIn = ({searchParams}:{searchParams:{callbackUrl:string}}) => {
	return (
		<EmptyFilter
			title="Please Login to Continue"
			subtitle="Please click the button below to login"
			showLogin
			callbackUrl={searchParams.callbackUrl}
		/>
	);
};

export default SignIn;
