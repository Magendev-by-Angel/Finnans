import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

const Circle = ({ percentage, h = '48', w = 48 }) => {
	return (
		<div className="h-48 w-48">
			<CircularProgressbar
				value={percentage / 10}
				text={`${percentage.toString()}%`}
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
	)
}
export default Circle
