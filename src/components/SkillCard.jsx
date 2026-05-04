export default function SkillCard({ iconClass, iconName }) {
  return (
    <div className="group w-full p-4 rounded-2xl flex flex-col justify-center items-center gap-2 bg-[#14274E]/80 backdrop-blur-sm border border-white/10 hover:border-sky-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/20 cursor-pointer">
      <i className={`${iconClass} text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110`}></i>
      <h1 className="text-sm md:text-base font-medium text-gray-200 group-hover:text-sky-400 transition-colors duration-300">
        {iconName}
      </h1>
    </div>
  );
}