

export default function HeroSection () {

    const heroParagraph = `a programmer specializing in React for building modern user interfaces and using Python or Express.js to create efficient backend systems. 
        I focus on developing clean, responsive, and user-friendly web applications.`;
    return (
        <div className="grid lg:grid-cols-2">
            <div className="bg-[#14274E] p-8">
                <h1 className="text-white font-bold text-3xl mb-4">Hello, I'm Lawrence</h1>
                <p className="text-white/70 mb-4">{heroParagraph}</p>
                <button 
                    className="bg-white text-[#14274E] rounded-xl p-2 mr-2"
                >
                    Download Resume
                </button>
                <button 
                    className="bg-white text-[#14274E] rounded-xl py-2 px-4"
                >
                    Github
                </button>
            </div>
            <div className="bg-red-500">

            </div>
        </div>
    )
}