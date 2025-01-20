"use client";
import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import { FieldValue, useForm } from "react-hook-form";
import Input from "../components/Input";
import DateInput from "../components/DateInput";
import { createAuction } from "../actions/auctionActions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AuctionForm = () => {
	const router = useRouter();
	const {
		control,

		handleSubmit,
		setFocus,

		formState: { isSubmitting, isValid },
	} = useForm({ mode: "onTouched" });

	useEffect(() => {
		setFocus("make");
	}, [setFocus]);
	const onSubmit = async (data: FieldValue) => {
		try {
			const res = await createAuction(data);
			if (res.error) {
				throw res.error;
			}
			router.push("/auctions/details/" + res.id);
		} catch (error) {
			toast.error(error?.message || "An error occurred");
		}
	};
	return (
		<form className="flex flex-col mt-3" onSubmit={handleSubmit(onSubmit)}>
			<Input
				label="Enter Car Manufacture/Make"
				name="make"
				control={control}
				rules={{ required: "Car Manufacturer is required" }}
			/>
			<Input
				label="Enter Car Model"
				name="model"
				control={control}
				rules={{ required: "Model is required" }}
			/>
			<Input
				label="Enter Car Colour"
				name="color"
				control={control}
				rules={{ required: "Colour is required" }}
			/>
			<div className="grid grid-cols-2 gap-3">
				<Input
					label="Enter Year of Manufacture"
					name="year"
					control={control}
					rules={{ required: "Year is required" }}
					type="number"
				/>
				<Input
					label="Enter Mileage"
					name="mileage"
					control={control}
					rules={{ required: "Mileage is required" }}
					type="number"
				/>
			</div>
			<Input
				label="Image URL"
				name="imageURL"
				control={control}
				rules={{ required: "Image URL is required" }}
			/>
			<div className="grid grid-cols-2 gap-3">
				<Input
					label="Reserve Price (Enter 0 if no Reserve Price)"
					name="reservePrice"
					control={control}
					rules={{ required: "Reserver Price is required" }}
					type="number"
				/>
				<DateInput
					label="Auction End Date/Time"
					name="auctionEnd"
					control={control}
					rules={{ required: "Auction End Date/Timeis required" }}
					dateFormat={"dd MMMM yyyy h:mm aa"}
					showTimeSelect
				/>
			</div>
			<div className="flex justify-between">
				<Button outline color="gray">
					Cancel
				</Button>
				<Button
					isProcessing={isSubmitting}
					disabled={!isValid}
					type="submit"
					outline
					color="success"
				>
					Submit
				</Button>
			</div>
		</form>
	);
};

export default AuctionForm;
