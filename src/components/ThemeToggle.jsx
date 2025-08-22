import useTheme from "../hooks/useTheme";
import star from "../assets/icons/star.png";

export default function ToggleButton() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`relative rounded-full overflow-hidden shadow-inner h-[calc(var(--header-height)-20px)] aspect-[5/2] transition-colors duration-500 ${
        darkMode ? "bg-slate-800" : "bg-blue-500"
      }`}
    >
      <div
        className={`absolute right-0 z-30 transition-all duration-500 ${
          darkMode ? "top-[100%]" : "top-0"
        }`}
      >
        <div className="absolute left-[calc(-1_*_(var(--header-height)-20px)/20*12)] top-[calc(1_*_(var(--header-height)-20px)/20*4)] h-[calc((var(--header-height)-20px)/20*16)] aspect-[1/1] rounded-full bg-white"></div>
        <div className="absolute left-[calc(-1_*_(var(--header-height)-20px)/20*18)] top-[calc(1_*_(var(--header-height)-20px)/20*12)] h-[calc((var(--header-height)-20px)/20*12)] aspect-[1/1] rounded-full bg-white"></div>
        <div className="absolute left-[calc(-1_*_(var(--header-height)-20px)/20*26)] top-[calc(1_*_(var(--header-height)-20px)/20*14)] h-[calc((var(--header-height)-20px)/20*12)] aspect-[1/1] rounded-full bg-white"></div>
        <div className="absolute left-[calc(-1_*_(var(--header-height)-20px)/20*38)] top-[calc(1_*_(var(--header-height)-20px)/20*16)] h-[calc((var(--header-height)-20px)/20*20)] aspect-[1/1] rounded-full bg-white"></div>
        <div className="absolute left-[calc(-1_*_(var(--header-height)-20px)/20*44)] top-[calc(1_*_(var(--header-height)-20px)/20*17)] h-[calc((var(--header-height)-20px)/20*14)] aspect-[1/1] rounded-full bg-white"></div>
      </div>

      <div
        className={`absolute right-1 z-0 transition-all duration-500 ${
          darkMode ? "top-[100%]" : "top-[-15%]"
        }`}
      >
        <div className="absolute left-[calc(-1_*_(var(--header-height)-20px)/20*12)] top-[calc(1_*_(var(--header-height)-20px)/20*4)] h-[calc((var(--header-height)-20px)/20*16)] aspect-[1/1] rounded-full bg-blue-200"></div>
        <div className="absolute left-[calc(-1_*_(var(--header-height)-20px)/20*18)] top-[calc(1_*_(var(--header-height)-20px)/20*12)] h-[calc((var(--header-height)-20px)/20*12)] aspect-[1/1] rounded-full bg-blue-200"></div>
        <div className="absolute left-[calc(-1_*_(var(--header-height)-20px)/20*26)] top-[calc(1_*_(var(--header-height)-20px)/20*14)] h-[calc((var(--header-height)-20px)/20*12)] aspect-[1/1] rounded-full bg-blue-200"></div>
        <div className="absolute left-[calc(-1_*_(var(--header-height)-20px)/20*38)] top-[calc(1_*_(var(--header-height)-20px)/20*16)] h-[calc((var(--header-height)-20px)/20*20)] aspect-[1/1] rounded-full bg-blue-200"></div>
        <div className="absolute left-[calc(-1_*_(var(--header-height)-20px)/20*44)] top-[calc(1_*_(var(--header-height)-20px)/20*17)] h-[calc((var(--header-height)-20px)/20*14)] aspect-[1/1] rounded-full bg-blue-200"></div>
      </div>

        <div className={`absolute left-0 w-full h-full pointer-events-none z-0 transition-all duration-500 ${
          darkMode ? "bottom-[0]" : "bottom-[100%]"
        }`}
      >
          <img src={star} class="absolute left-[5%] top-[12%] w-[8%]" />
          <img src={star} class="absolute left-[15%] top-[32%] w-[8%]" />
          <img src={star} class="absolute left-[30%] top-[62%] w-[8%]" />
          <img src={star} class="absolute left-[45%] top-[57%] w-[8%]" />
          <img src={star} class="absolute left-[5%] top-[37%] w-[12%]" />
          <img src={star} class="absolute left-[20%] top-[7%] w-[12%]" />
          <img src={star} class="absolute left-[35%] top-[2%] w-[12%]" />
          <img src={star} class="absolute left-[15%] top-[57%] w-[14%]" />
          <img src={star} class="absolute left-[25%] top-[27%] w-[14%]" />
          <img src={star} class="absolute left-[40%] top-[17%] w-[15%]" />
        </div>

      <div
        onClick={toggleTheme}
        className={`group absolute top-1/2 -translate-y-1/2 rounded-full shadow-lg cursor-pointer transition-all duration-500 h-[calc((var(--header-height)-20px)-8px)] aspect-[1/1] flex items-center justify-center ${
          darkMode
            ? "left-[calc((var(--header-height)-20px)_*_3/2)]"
            : "left-[6px]"
        }`}
      >
        <div className="absolute rounded-full pointer-events-none h-[calc(3_*_(var(--header-height)-20px))] aspect-[1/1] bg-stone-100/15 z-0 transition-transform duration-600 group-hover:scale-115"></div>
        <div className="absolute rounded-full pointer-events-none h-[calc(2.3_*_(var(--header-height)-20px))] aspect-[1/1] bg-stone-100/20 z-0 transition-transform duration-600 group-hover:scale-115"></div>
        <div className="absolute rounded-full pointer-events-none h-[calc(1.5_*_(var(--header-height)-20px))] aspect-[1/1] bg-stone-100/40 z-0 transition-transform duration-600 group-hover:scale-115"></div>

        <div
          className={`absolute h-[calc((var(--header-height)-20px)-8px)] aspect-[1/1] rounded-full transition-all duration-500 bg-yellow-400 ${
            darkMode
              ? "left-0 opacity-0 pointer-events-none"
              : "left-0 opacity-100"
          }`}
        ></div>
        <div
          className={`absolute h-[calc((var(--header-height)-20px)-8px)] aspect-[1/1] rounded-full transition-all duration-500 bg-slate-300 ${
            darkMode
              ? "left-0 opacity-100"
              : "left-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute top-[4px] left-[14px] w-2 h-2 bg-slate-400 rounded-full shadow-inner" />
          <div className="absolute top-[16px] left-[6px] w-3 h-3 bg-slate-400 rounded-full shadow-inner" />
          <div className="absolute top-[18px] left-[22px] w-1.5 h-1.5 bg-slate-400 rounded-full shadow-inner" />
        </div>
      </div>
    </div>
  );
}
