import Image from "next/image"

export default function Nav(){
    return(
        <nav className="h-[4vw] w-full bg-[#272E36] text-[#9095A1] flex justify-end items-center px-10">
            <div className="font-bold flex space-x-20 text-lg">
                <p className="text-shadow-lg">Inicio</p>
                <p>Editor</p>
                <p>Tutorial</p>
                <p>Mi usuario</p>
            </div>
        </nav>
    )
}