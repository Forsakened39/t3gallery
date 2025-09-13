import Link from "next/link";
const mockUrls = ["https://g6ls09toj2.ufs.sh/f/MnwCLV6PyBxUHbL8mj54aGZkPvTRwxmYKXj62niHlcsqSOCA","https://g6ls09toj2.ufs.sh/f/MnwCLV6PyBxUYG78nvPdIVanQs6E41G5xuBF0H8ARjboDmcO", "https://g6ls09toj2.ufs.sh/f/MnwCLV6PyBxUYphrWxPdIVanQs6E41G5xuBF0H8ARjboDmcO"]
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
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
			<div className="flex flex-wrap gap-4">{
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
