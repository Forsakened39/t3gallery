import Link from "next/link";
const mockUrls = ["https://k6fbvcjxww.ufs.sh/f/9pjQNL6bGuVgI8PHrJdoywpz3bPQMKUcaqY1m09ukrjxVGES"
	,"https://k6fbvcjxww.ufs.sh/f/9pjQNL6bGuVgA1cxIl0mkSsT3tfF6xrnH2yC4lzLwdObPRvU"
	,"https://k6fbvcjxww.ufs.sh/f/9pjQNL6bGuVgFX0HnroPuaKHey2g9YMLfb71ts0CWSBOdjvp"
	,"https://k6fbvcjxww.ufs.sh/f/9pjQNL6bGuVgXgwmWcFs9QaG18AMrjh3On6LWYdEZVqw7PNF"]
const mockImages = mockUrls.map((url, index) => ({
	id: index + 1,
	url,
}));
//flex flex-wrap gap-4 makes the gap bigger or smaller
//makes it bigger className="w-48"
//className is in element css
//only file that doesnt get uploaded is env
export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#fafbf6] to-[#0f0f1b] text-white">

			<h1 className="text-blue">References</h1>

			<div className="flex flex-wrap gap-4"> {
			mockImages.map((image) => (
				<div key ={image.id} className="w-60"> 
				<img src={image.url} alt="image" />
				</div>
			))
			}
			</div>
		</main>
	);
}
