export default function Header(){
    return(
        <header className="px-10 flex justify-between">
            <div>
                <div className="text-[#272E36] pt-14 ">
                    <h1 className="text-4xl md:text-8xl font-bold text-shadow">Creador de <span className="text-[#fff]">CV</span></h1>
                    <p className="font-medium text-shadow ml-[100px] pt-2">{`"Tu experiencia, transformada en una narrativa impactante."`}</p>
                </div>
                <div className=" min-w-[300px] max-w-[800px]">
                    <h4 className="mt-16 font-bold">Bienvenido a nuestra plataforma de creación de CV, diseñada para potenciar tu presentación profesional.</h4>
                    <h5 className="mt-6 font-light">Nuestra web está creada con el propósito de ayudarte a construir un currículum que no solo refleje tus experiencias y habilidades, sino que también destaque tu perfil de manera impactante y profesional. Con una variedad de plantillas elegantes y un editor intuitivo, te ofrecemos las herramientas necesarias para diseñar un CV que resalte tus fortalezas y logros.</h5>
                    <h5 className="mt-6 font-light">Disfruta de sugerencias personalizadas para optimizar tu contenido, guarda y edita tus CV de forma segura, y accede a tu información en cualquier momento gracias a nuestra funcionalidad de persistencia de datos. Prepárate para presentar tu trayectoria de manera excepcional y atraer las oportunidades que mereces.</h5>
                </div>
            </div>
            <div className=" mt-20 mr-12 ">
                <div className="w-[400px] h-[380px] bg-[#191F25] rounded-md border-t-[15px] border-[#272e36] shadow-lg px-4">
                    <p className="w-full bg-[#272e36] h-12 mt-6 rounded-md text-[#9095A1] text-center pt-3 font-bold">Multiples diseños</p>
                    <p className="w-full bg-[#272e36] h-12 mt-6 rounded-md text-[#9095A1] text-center pt-3 font-bold">Optimizados para filtros</p><p className="w-full bg-[#272e36] h-12 mt-6 rounded-md text-[#9095A1] text-center pt-3 font-bold">Persistencia de datos</p><p className="w-full bg-[#272e36] h-12 mt-6 rounded-md text-[#9095A1] text-center pt-3 font-bold">Exportable a Word y PDF</p>
                    <p className="text-sm text-center mt-5 text-[#9095A1]">Totalmente gratuito para fomentar tu desarrollo profesional.</p>
                </div>
                <button className="w-full bg-white mt-3 h-10 rounded-md text-[#191F25] font-bold text-lg">Crear CV</button>
            </div>
            <div className="decoration-header"></div>
        </header>
    )
}