import { motion } from "framer-motion";
import FlytrapInteractive from "@/components/FlytrapInteractive";
import { useTheme } from "@/hooks/useTheme";

export default function SciencePage() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <div className={`min-h-screen p-4 md:p-8 flex flex-col ${isDark ? 'bg-slate-900 text-white' : 'bg-gradient-to-b from-green-50 to-yellow-50 text-slate-800'}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
          奇妙植物世界
        </h2>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/30 backdrop-blur-sm shadow-md"
          aria-label="切换主题"
        >
          {isDark ? (
            <i className="fa-solid fa-sun text-yellow-400 text-xl"></i>
          ) : (
            <i className="fa-solid fa-moon text-slate-600 text-xl"></i>
          )}
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center text-emerald-600 dark:text-emerald-400">
          神奇的捕蝇草
        </h1>
        
        <div className="flex justify-center mb-6">
          <img
            src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=venus%20flytrap%20storybook%20illustration%2C%20colorful%20cartoon%20style%2C%20smiling%20face%20plant%2C%20in%20forest&sign=3138824a9f875d1ab13b8c63e95bef67"
            alt="捕蝇草封面"
            className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full shadow-lg"
          />
        </div>
      </motion.div>

      {/* 互动区域 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`mb-12 p-6 md:p-8 rounded-2xl shadow-lg ${isDark ? 'bg-slate-800' : 'bg-white/80 backdrop-blur-sm'}`}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-emerald-500 dark:text-emerald-300">
          互动时间！试试看点击捕蝇草的"小嘴巴"
        </h2>
        
        <div className="flex justify-center">
          <FlytrapInteractive />
        </div>
      </motion.div>

      {/* 科普知识 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className={`mb-8 p-6 md:p-8 rounded-2xl shadow-lg ${isDark ? 'bg-slate-800' : 'bg-white/80 backdrop-blur-sm'}`}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-emerald-500 dark:text-emerald-300">
          <i className="fa-solid fa-leaf mr-2"></i>
          捕蝇草小知识
        </h2>
        
        <div className="space-y-4 text-base md:text-lg leading-relaxed">
          <div className="flex items-start">
            <div className="mt-1 mr-3 text-emerald-500 dark:text-emerald-300">
              <i className="fa-solid fa-circle text-xs"></i>
            </div>
            <p>捕蝇草是一种会"吃虫子"的神奇植物！它生长在潮湿的地方，因为那里的土壤缺少营养，所以它需要通过吃小虫子来获取养分。</p>
          </div>
          
          <div className="flex items-start">
            <div className="mt-1 mr-3 text-emerald-500 dark:text-emerald-300">
              <i className="fa-solid fa-circle text-xs"></i>
            </div>
            <p>捕蝇草的叶子长得像一个小夹子，边缘有许多像牙齿一样的刺。当小虫子不小心碰到叶子上的刚毛时，捕蝇草就会迅速闭合叶子，把虫子关在里面！</p>
          </div>
          
          <div className="flex items-start">
            <div className="mt-1 mr-3 text-emerald-500 dark:text-emerald-300">
              <i className="fa-solid fa-circle text-xs"></i>
            </div>
            <p>捕蝇草闭合后，会慢慢分泌消化液，把虫子分解成营养，然后吸收掉。大约一周后，叶子会重新打开，准备捕捉下一只小虫子！</p>
          </div>
        </div>
      </motion.div>

      {/* 趣味问答 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className={`p-6 md:p-8 rounded-2xl shadow-lg ${isDark ? 'bg-slate-800' : 'bg-white/80 backdrop-blur-sm'}`}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-emerald-500 dark:text-emerald-300">
          <i className="fa-solid fa-question-circle mr-2"></i>
          小朋友，你知道吗？
        </h2>
        
        <div className="space-y-6">
          <div className={`p-4 rounded-xl border-2 ${isDark ? 'border-emerald-700 bg-slate-700/50' : 'border-emerald-200 bg-emerald-50'}`}>
            <p className="italic text-center">
              捕蝇草的叶子可以开合大约5-7次，之后就会慢慢枯萎，长出新的叶子来！
            </p>
          </div>
          
          <div className="flex justify-center">
            <img
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=venus%20flytrap%20catching%20fly%2C%20cartoon%20style%2C%20storybook%20illustration%2C%20happy%20expression&sign=d8e78e6b11606172fb81ac47b3c326d9"
              alt="捕蝇草捕食"
              className="w-full max-w-md h-auto rounded-xl shadow-md"
            />
          </div>
        </div>
      </motion.div>
      
      <div className="mt-auto pt-8 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>奇妙自然科普馆 © 2025</p>
      </div>
    </div>
  );
}