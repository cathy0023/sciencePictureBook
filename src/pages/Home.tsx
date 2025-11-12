import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 p-4 md:p-8 flex flex-col items-center justify-center">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-emerald-600 mb-4 drop-shadow-lg">
          奇妙自然科普馆
        </h1>
        <p className="text-xl md:text-2xl text-emerald-500">
          小朋友们，一起探索神奇的自然界吧！
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-12 w-full max-w-md"
      >
        <img
          src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=children%20exploring%20nature%2C%20colorful%20cartoon%20style%2C%20storybook%20illustration%2C%20sunshine%20forest%2C%20happy%20smile&sign=5c33cb267a86aae5556cda764b8d71a1"
          alt="孩子们探索自然"
          className="w-full h-auto rounded-2xl shadow-xl"
        />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link to="/science">
          <button className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold text-xl md:text-2xl py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex items-center gap-2">
            <i className="fa-solid fa-seedling"></i>
            开始探索
          </button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-0 right-0 flex justify-center"
      >
        <p className="text-sm text-emerald-600">适合3-6岁小朋友的科普知识</p>
      </motion.div>
    </div>
  );
}