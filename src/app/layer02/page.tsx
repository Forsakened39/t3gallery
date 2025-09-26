import Link from "next/link";

export default function Layer2Page() {
  return ( //Layer 
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#fafbf6] via-[#565a75] to-[#0f0f1b] text-white">

        (Second page yaaaas)
      <button className="btn btn-wide">			
				<Link href="../">Dashboard</Link>
			</button>
      <div className="dropdown dropdown-start">
        <div tabIndex={0} role="button" className="btn m-1">Dropdown menu</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><a>What if They were behind you</a></li>
            <li><a>All your fault</a></li>
          </ul>
        </div>
    </main>
  );
}
