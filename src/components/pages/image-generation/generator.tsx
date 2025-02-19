'use client'

export const Generator = () => {
	return (
		<div>
			<div className="h-[260px] flex flex-row gap-x-10">
				<div className="h-[260px] min-w-[260px] ">
					<img
						src="/woman.webp"
						className="rounded-[15px] w-full h-full object-cover"
						alt=""
					/>
				</div>
				<textarea className="hover:border-1 hover:border-[#616161] h-[260px] p-5 outline-none rounded-[15px] resize-none w-full bg-[#353535]"></textarea>
			</div>
		</div>
	)
}
