export default function SkillCard({ iconClass, iconName, emoji }) {
  return (
    <div className="group w-full p-4 rounded-xl flex flex-col justify-center items-center gap-2 bg-gray-800/40 border border-white/5 hover:border-sky-500/30 hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/10 cursor-default">
      {emoji
        ? <span className="text-3xl transition-transform duration-300 group-hover:scale-110">{emoji}</span>
        : <i className={`${iconClass} text-3xl transition-transform duration-300 group-hover:scale-110`}></i>
      }
      <p className="text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-center">
        {iconName}
      </p>
    </div>
  );
}
