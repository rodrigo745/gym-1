import Image from "next/image"

export default function Nav(){
    return(
        <nav className="h-16 w-full bg-white text-slate-950 flex justify-between items-center px-10">
            <div>
                <Image src="/logo.png" width={50} height={50} alt="logo" />
            </div>
        </nav>
    )
}