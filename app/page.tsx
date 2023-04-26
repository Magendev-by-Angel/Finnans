'use client'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

const Page = () => {
<<<<<<< HEAD
	//test comment
	const router = useRouter();
	const pathname = usePathname();
	console.log(router);
	console.log(pathname);
	return <div>Page</div>;
};
export default Page;
=======
	const [percentage, setPercentage] = useState<number>(10)
	return (
		<div>
			<div>
				<h1>Home</h1>
				<div className="h-96 w-96">
					<CircularProgressbar
						value={percentage}
						text={`${percentage}%`}
						styles={buildStyles({
							// Rotation of path and trail, in number of turns (0-1)
							rotation: 0,

							// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
							strokeLinecap: 'round',

							// Text size
							textSize: '1rem',

							// How long animation takes to go from one percentage to another, in seconds
							pathTransitionDuration: 0.5,

							// Can specify path transition in more detail, or remove it entirely
							// pathTransition: 'none',

							// Colors
							pathColor: `#1b0d2b`,
							textColor: 'white',
							trailColor: '#6e1dcc'
						})}
					/>
				</div>
				<form>
					<input
						type="range"
						min="0"
						max="100"
						value={percentage}
						onChange={e => {
							setPercentage(parseInt(e.target.value))
						}}
					/>
				</form>
			</div>
		</div>
	)
}
export default Page
>>>>>>> d0ad054d6b696fa27a111c777215d09557e2521b
