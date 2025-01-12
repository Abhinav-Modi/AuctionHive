"use client";
import React from "react";
import Countdown, { zeroPad } from "react-countdown";

interface CountdownProps {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	completed: boolean;
}

type Props = {
	auctionEnd: string;
};

const renderer = ({
	days,
	hours,
	minutes,
	seconds,
	completed,
}: CountdownProps) => {
	return (
		<div
			className={`
      rounded-lg shadow-md text-sm
      ${
				completed
					? "bg-red-600 hover:bg-red-700"
					: days === 0 && hours < 10
					? "bg-amber-500 hover:bg-amber-600"
					: "bg-green-600 hover:bg-green-700"
			} transition-colors duration-200
    `}
		>
			<div className="p-2">
				{completed ? (
					<div className="text-white font-semibold text-xs">
						Auction Finished
					</div>
				) : (
					<div className="space-y-1">
						<div className="text-white/80 text-xs font-medium text-center">
							Ends in
						</div>
						<div className="grid grid-cols-4 gap-1 text-center">
							<div className="flex flex-col">
								<span className="text-white text-xs font-bold">
									{zeroPad(days)}
								</span>
								<span className="text-white/60 text-[10px]">Days</span>
							</div>
							<div className="flex flex-col">
								<span className="text-white text-xs font-bold">
									{zeroPad(hours)}
								</span>
								<span className="text-white/60 text-[10px]">Hrs</span>
							</div>
							<div className="flex flex-col">
								<span className="text-white text-xs font-bold">
									{zeroPad(minutes)}
								</span>
								<span className="text-white/60 text-[10px]">Min</span>
							</div>
							<div className="flex flex-col">
								<span
									className="text-white text-xs font-bold"
									suppressHydrationWarning={true}
								>
									{zeroPad(seconds)}
								</span>
								<span className="text-white/60 text-[10px]">Sec</span>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

const CountdownTimer = ({ auctionEnd }: Props) => {
	return (
		<div className="w-fit">
			<Countdown date={auctionEnd} renderer={renderer} />
		</div>
	);
};

export default CountdownTimer;
