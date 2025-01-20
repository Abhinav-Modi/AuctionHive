import { getDetailViewData } from "@/app/actions/auctionActions";
import Heading from "@/app/components/Heading";
import React from "react";
import CountdownTimer from "../../CountdownTimer";
import CarImage from "../../CarImage";
import DetailedSpecs from "./DetailedSpecs";
import EditButton from "./EditButton";
import { getCurrentUser } from "@/app/actions/authActions";
import DeleteButton from "./DeleteButton";

const Details = async ({ params }: { params: { id: string } }) => {
	const { id } = await Promise.resolve(params);
	const data = await getDetailViewData(id);
  const user = await getCurrentUser();
	return (
		<div className="flex flex-col gap-4">
			<div className="flex justify-between">
				<Heading title={`${data.make} ${data.model}`} />
				{user?.username === data.seller && (
					<>
						<EditButton id={data.id} />
						<DeleteButton id={data.id} />
					</>
				)}
				<div className="flex flex-col items-center">
					<CountdownTimer auctionEnd={data.auctionEnd} />
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="rounded-lg overflow-hidden relative h-[300px] md:h-[400px] lg:h-[500px]">
					<CarImage auction={data} />
				</div>
				<div className="border-2 rounded-lg p-2 bg-gray-100">
					<Heading title="Bids" />
				</div>
			</div>
			<div className="w-full mt-3">
				<DetailedSpecs auction={data} />
			</div>
		</div>
	);
};

export default Details;
