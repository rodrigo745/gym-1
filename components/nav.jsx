import Image from "next/image"

export default function Nav(){
    return(
        <nav className="h-[4vw] w-full bg-[#07F4B0] text-slate-950 flex justify-between items-center px-10">
            <div>
                <Image src="/logo.png" width={50} height={50} alt="logo" />
            </div>
            <div className="text-slate-950 font-bold flex space-x-20 text-lg">
                <p className="text-shadow-lg">Inicio</p>
                <p>Planes</p>
                <p>Contacto</p>
                <button className="py-1 px-4 bg-white shadow-sm rounded-md">Ingresar</button>
            </div>
        </nav>
    )
}