'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Aside from '../../components/aside'
// import { useRouter, usePathname } from 'next/navigation'

type InputProps = {
	label: string
	type: string
	value: string
	checker?: string
	setValue: React.Dispatch<React.SetStateAction<string>>
}
const Input = ({ label, type, value, setValue, checker }: InputProps) => {
	const [notMatch, setNotMatch] = useState<string>('')
	return (
		<>
			<label
				htmlFor={label}
				className="xl:text-[#7B7979] mt-4 text-[#a3a1a1] ml-2"
			>
				{label}
			</label>
			<input
				type={type}
				className={`w-full rounded-md p-2 text-black ${notMatch}`}
				value={value}
				onChange={e => {
					e.preventDefault()
					if (checker) {
						if (checker !== e.target.value) {
							setNotMatch('focus:outline-2 focus:outline-red-600')
						} else {
							setNotMatch('')
						}
					}
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
	const [
		[username, setUsername],
		[email, setEmail],
		[password, setPassword],
		[repPassword, setRepPassword]
	] = [
		useState<string>(''),
		useState<string>(''),
		useState<string>(''),
		useState<string>('')
	]

	return (
		<form action="" className="form-log-reg">
			<div className="h-[87%] w-4/5 flex flex-col ">
				<h1 className="form-log-reg-h1 font-semibold">Sign up!</h1>
				<div className="form-log-reg-message">
					Say goodbye to overspending and hello to financial freedom.
					Join Finnas and start tracking your expenses with ease
				</div>
				<Input
					type="text"
					label="username"
					setValue={setUsername}
					value={username}
				/>
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
				<Input
					type="password"
					label="repeat password"
					setValue={setRepPassword}
					value={repPassword}
					checker={password}
				/>
				<span className="py-4" />
				<button className="form-submit-button">Create account</button>
				<div className="form-signin-login-box">
					Do you already have an account?
					<Link href="/login" className="redirect-link">
						Log in
					</Link>
				</div>
				<div className="form-terms-of-service">
					<div className="w-4/5 text-center">
						by creating an account you agree to our
						<Link href="#" className="redirect-link">
							Terms of Service
						</Link>
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
				<Form />
				<Aside />
			</main>
		</section>
	)
}
export default Page
