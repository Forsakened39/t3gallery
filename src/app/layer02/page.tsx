import Link from "next/link";

export default function Layer2Page() {
  return ( //Layer 
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#fafbf6] via-[#565a75] to-[#0f0f1b] text-white">

        (Second page yaaaas)
      <button>			
				<Link href="../">Dashboard</Link>
			</button>

    </main>
  );
}
