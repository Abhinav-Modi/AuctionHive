import { Label } from "flowbite-react";
import React from "react";
import { useController, UseControllerProps } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { DatePickerProps } from "react-datepicker";
type Props = {
	label: string;
	type?: string;
	showLabel?: string;
} & UseControllerProps &
	DatePickerProps;

const DateInput = (props: Props) => {
	const { fieldState, field } = useController({ ...props, defaultValue: "" });
	return (
		<div className="mb-3">
			{props.showLabel && (
				<div className="mb-2 block ">
					<Label htmlFor={field.name} value={props.label} />
				</div>
			)}
			<DatePicker
				{...props}
				{...field}
				placeholderText={props.label}
				selected={field.value}
				className={`rounded-lg w-[100%] flex flex-col ${
					fieldState.error
						? "border-red-500 bg-red-100 text-red-900"
						: !fieldState.invalid && fieldState.isDirty
						? "border-green-500 bg-green-100 text-green-900"
						: ""
				}`}
			/>

            {fieldState.error && (
                            <div className="text-red-500 text-sm mt-1">{fieldState.error.message}</div>
                        )}
		</div>
	);
};

export default DateInput;
