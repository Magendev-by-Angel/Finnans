const Aside = () => {
	return (
		<aside className="hidden xl:w-1/2 xl:h-full xl:flex xl:items-center xl:justify-center ">
			<div className="h-[87%] w-4/5">
				<div className="h-3/5 text-[32px] font-semibold overflow-auto">
					Get in control of your spending with Finnas - the
					easy-to-use spending tracker that helps you stay on top of
					your finances.
				</div>
				<div className="h-2/5 flex flex-wrap items-end">
					<div className="w-full bg-[#82778D33] p-4 rounded-xl">
						<div className="text-xs text-[11px] font-thin overflow-auto">
							I've been using Finnas for a few weeks now and it's
							been a game-changer for me. It's so easy to track my
							spending and see where my money is going each week,
							month, and year.
						</div>
						<div className="flex mt-4">
							<div className="bg-gray-500 rounded-md p-2 aspect-square">
								Icon
							</div>
							<div className="ml-2">
								<div className="text-sm font-bold">
									John Smith
								</div>
								<div className="text-xs">Accountant</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center items-end w-full">
						<div className="h-[10px] mx-1 w-[10px] rounded-full bg-[#D9D9D9]"></div>
						<div className="h-[10px] mx-1 w-[10px] rounded-full bg-[#D9D9D999]"></div>
					</div>
				</div>
			</div>
		</aside>
	)
}
export default Aside
