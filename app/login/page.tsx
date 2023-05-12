'use client'
import React, { useState } from 'react'
import Aside from '../../components/aside'
// import { useRouter, usePathname } from 'next/navigation'

type InputProps = {
	label: string
	type: string
	value: string
	setValue: React.Dispatch<React.SetStateAction<string>>
}
const Input = ({ label, type, value, setValue }: InputProps) => {
	return (
		<>
			<label htmlFor={label} className="text-[#535353] mt-4">
				{label}
			</label>
			<input
				type={type}
				className="w-full rounded-md p-2 text-black"
				value={value}
				onChange={e => {
					e.preventDefault()
					setValue(e.target.value)
				}}
				id={label}
				name={label}
				aria-label={label}
			/>
		</>
	)
}
const Form = () => {
	const [[password, setPassword], [email, setEmail]] = [
		useState<string>(''),
		useState<string>('')
	]
	// (property) InputHTMLAttributes<HTMLInputElement>.value?: string | number | readonly string[]

	return (
		<form action="" className="form-log-reg">
			<div className="h-[87%] w-4/5 flex flex-col ">
				<h1 className="form-log-reg-h1 font-semibold">Welcome</h1>
				<div className="form-log-reg-message ">
					Say goodbye to overspending and hello to financial freedom.
					Join Finnas and start tracking your expenses with ease
				</div>
				<Input
					type="email"
					label="email"
					setValue={setEmail}
					value={email}
				/>
				<Input
					type="password"
					label="password"
					setValue={setPassword}
					value={password}
				/>
				<a href="/#" className="text-[#8B72A3] flex justify-end my-4">
					Forgot password?
				</a>
				<button className="form-submit-button">Login</button>
				<span className="w-full flex justify-center my-8 text-[#7B7979] text-sm">
					or
				</span>
				<button className="bg-white text-[#A1A1A1] w-full rounded-md p-2 hover:bg-[#f5f5f5]">
					Continue with google
				</button>
				<div className="form-signin-login-box">
					You don’t have an account yet?
					<a href="/register" className="redirect-link">
						Sign up
					</a>
				</div>
				<div className="form-terms-of-service">
					<div className="w-4/5 text-center">
						by creating and account you agree to our
						<a href="#" className="redirect-link">
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</form>
	)
}

const Page = () => {
	return (
		<section className="w-screen h-screen flex justify-center items-center">
			<main className="main-log-reg">
				<Aside />
				<Form />
			</main>
		</section>
	)
}
export default Page
