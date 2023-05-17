import Overview from '../../components/overview'
import Adder from './adder'
import Searcher from './searcher'

const Page = () => {
	return (
		<main className="w-full">
			<Overview />
			<section className="flex justify-center mt-4">
				<div className="w-4/5 flex ">
					<div className="w-2/3">
						<Searcher />
					</div>
					<div className="w-1/3">
						<Adder />
					</div>
				</div>
			</section>
		</main>
	)
}

export default Page
