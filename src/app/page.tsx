import Link from "next/link";
const mockUrls = ["https://k6fbvcjxww.ufs.sh/f/9pjQNL6bGuVgGw499GfZRLSFgH43yiNlX8uvp06YoWcTEPIA","https://k6fbvcjxww.ufs.sh/f/9pjQNL6bGuVg3gL0fZRQeWFwENyH5S8bKIDGYmRqlUQZtVkP","https://k6fbvcjxww.ufs.sh/f/9pjQNL6bGuVgt2HM16zwcW1LF8T3jIQ9Slx02VkdNeRKzJy7"]
const mockImages = mockUrls.map((url, index) => ({
	id: index + 1,
	url,
}));
//flex flex-wrap gap-4 makes the gap bigger or smaller
//makes it bigger className="w-48"
//className is in element css
//only file that doesnt get uploaded is env
//test sknjkldjnf
export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#EE4B2B] to-[#d1e8e3] text-white">

			<h1 className="text-blue">References</h1>

			<div className="flex flex-wrap gap-4"> {
			mockImages.map((image) => (
				<div key ={image.id} className="w-48"> 
				<img src={image.url} alt="image" />
				</div>
			))
			}
			</div>
		</main>
	);
}
