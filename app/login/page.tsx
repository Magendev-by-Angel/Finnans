'use client'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

const Page = () => {
	const inputStyle = 'w-full rounded-md p-2 text-black'
	return (
		<section className="w-screen h-screen flex justify-center items-center">
			<div className="w-1/2 h-3/4 flex bg-[#51515133] rounded-2xl overflow-hidden max-w-[864px]">
				<div className="w-1/2 h-full flex items-center justify-center">
					<div className="h-[87%] w-4/5">
						<div className="h-3/5 text-[36px] font-semibold">
							Get in control of your spending with Finnas - the
							easy-to-use spending tracker that helps you stay on
							top of your finances.
						</div>
						<div className="h-2/5 flex flex-wrap items-end">
							<div className="w-full bg-[#82778D33] p-4 rounded-xl">
								<div className="text-xs text-[11px] font-thin">
									I've been using Finnas for a few weeks now
									and it's been a game-changer for me. It's so
									easy to track my spending and see where my
									money is going each week, month, and year.
								</div>
								<div className="flex mt-4">
									<div>Icon</div>
									<div className="ml-2">
										<div className="text-sm font-bold">
											John Smith
										</div>
										<div className="text-xs">
											Accountant
										</div>
									</div>
								</div>
							</div>
							<div className="flex justify-center items-end w-full">
								<div className="h-[10px] mx-1 w-[10px] rounded-full bg-[#D9D9D9]"></div>
								<div className="h-[10px] mx-1 w-[10px] rounded-full bg-[#D9D9D999]"></div>
							</div>
						</div>
					</div>
				</div>
				<form
					action=""
					className="w-1/2 h-full bg-[#D9D9D9] flex justify-center items-center"
				>
					<div className="h-[87%] w-4/5 flex flex-col ">
						<h1 className="text-black w-full flex justify-center text-4xl">
							Welcome
						</h1>
						<div className="text-[#7B7979] text-[14px] w-full flex leading-4 mt-4">
							Say goodbye to overspending and hello to financial
							freedom. Join Finnas and start tracking your
							expenses with ease
						</div>
						<div className="text-[#535353] mt-4">email</div>
						<input type="email" className={inputStyle} />
						<div className="text-[#535353] mt-4">password</div>
						<input type="password" className={inputStyle} />
						<a
							href="/#"
							className="text-[#8B72A3] flex justify-end my-4"
						>
							Forgot password?
						</a>
						<button className="bg-[#523869] text-white w-full rounded-md p-2">
							Login
						</button>
						<span className="w-full flex justify-center my-8 text-[#7B7979] text-sm">
							or
						</span>
						<button className="bg-white text-[#A1A1A1] w-full rounded-md p-2">
							Continue with google
						</button>
						<div className="flex text-[#535353] font-semibold text-sm w-full justify-center mt-4">
							You don’t have an account yet?
							<a
								href="#"
								className="ml-1 font-medium text-[#82778D]"
							>
								Sign up
							</a>
						</div>
						<div className="flex text-[#535353] font-semibold text-sm justify-center mt-4 flex-auto items-end w-full">
							<div className="w-4/5 text-center">
								by creating and account you agree to our
								<a
									href="#"
									className="ml-1 font-medium text-[#82778D]"
								>
									Terms of Service
								</a>
							</div>
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}
export default Page
