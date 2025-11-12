import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const FlytrapInteractive = () => {
  const [isClosed, setIsClosed] = useState(false);
  const [triggerCount, setTriggerCount] = useState(0);
  const [showTrapCount, setShowTrapCount] = useState(false);
  
  // 重置触发次数
  useEffect(() => {
    if (triggerCount === 2) {
      // 触发闭合动画
      const timer = setTimeout(() => {
        setIsClosed(true);
        // 显示闭合后的提示
        toast('哇！捕蝇草闭合了！它以为抓到虫子了！', {
          duration: 3000,
          position: 'top-center',
          style: {
            backgroundColor: '#dcfce7',
            color: '#166534',
            borderRadius: '12px',
            border: '2px solid #22c55e',
            padding: '12px 16px',
            fontWeight: 'bold'
          }
        });
        
        // 3秒后重新打开
        const reopenTimer = setTimeout(() => {
          setIsClosed(false);
          setTriggerCount(0);
        }, 3000);
        
        return () => clearTimeout(reopenTimer);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [triggerCount]);
  
  // 点击刚毛触发
  const handleTrigger = () => {
    setTriggerCount(prev => {
      const newCount = prev + 1;
      
      // 第一次点击提示
      if (newCount === 1) {
        toast('你碰到了捕蝇草的刚毛！', {
          duration: 2000,
          position: 'top-center',
          style: {
            backgroundColor: '#dbeafe',
            color: '#1e40af',
            borderRadius: '12px',
            border: '2px solid #60a5fa',
            padding: '12px 16px',
            fontWeight: 'bold'
          }
        });
        setShowTrapCount(true);
        
        // 2秒后隐藏计数提示
        setTimeout(() => {
          setShowTrapCount(false);
        }, 2000);
      }
      
      return newCount;
    });
  };
  
  // 点击叶子重置
  const handleLeafClick = () => {
    if (isClosed) {
      setIsClosed(false);
      setTriggerCount(0);
    }
  };
  
  return (
    <div className="relative flex flex-col items-center">
      {/* 捕蝇草容器 */}
      <div className="relative w-full max-w-xs cursor-pointer" onClick={handleLeafClick}>
        {/* 茎 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-6 h-40 bg-green-600 rounded-t-full"></div>
        
        {/* 叶子 - 使用动画 */}
        <AnimatePresence>
          <motion.div
            key={isClosed ? "closed" : "open"}
            initial={false}
            animate={{ 
              rotate: isClosed ? 0 : [0, -2, 0, 2, 0], // 轻微摇摆效果
              transition: { 
                rotate: isClosed ? { duration: 0.5 } : { repeat: Infinity, duration: 3 } 
              }
            }}
            className="relative z-10"
          >
            {isClosed ? (
              // 闭合状态
              <img
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=venus%20flytrap%20closed%20trap%2C%20cartoon%20style%2C%20storybook%20illustration%2C%20smiling%20face&sign=8bab054df25605024d58e2d7716703e6"
                alt="闭合的捕蝇草"
                className="w-full h-auto"
              />
            ) : (
              // 打开状态
              <div className="relative">
                <img
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=venus%20flytrap%20open%20trap%2C%20cartoon%20style%2C%20storybook%20illustration%2C%20smiling%20face&sign=f6124ba3a2ec7765b484abc9a9f8f336"
                  alt="打开的捕蝇草"
                  className="w-full h-auto"
                />
                
                {/* 可点击的刚毛区域 - 使用透明圆形覆盖在图片上的刚毛位置 */}
                <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-transparent" onClick={(e) => { e.stopPropagation(); handleTrigger(); }}>
                  <motion.div 
                    animate={{ scale: triggerCount >= 1 ? [1, 1.2, 1] : 1 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 rounded-full ${triggerCount >= 1 ? 'bg-yellow-400/30' : 'bg-transparent'}`}
                  />
                </div>
                
                <div className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-transparent" onClick={(e) => { e.stopPropagation(); handleTrigger(); }}>
                  <motion.div 
                    animate={{ scale: triggerCount >= 1 ? [1, 1.2, 1] : 1 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 rounded-full ${triggerCount >= 1 ? 'bg-yellow-400/30' : 'bg-transparent'}`}
                  />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* 点击提示 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isClosed || triggerCount > 0 ? 0 : 1 }}
        className="mt-4 text-center"
      >
        <p className="text-emerald-600 font-medium">点击捕蝇草叶子上的刚毛试试看！</p>
      </motion.div>
      
      {/* 计数提示 */}
      <AnimatePresence>
        {showTrapCount && triggerCount < 2 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 px-4 py-2 bg-yellow-100 rounded-full text-yellow-800 font-bold shadow-md"
          >
            再点一次刚毛，捕蝇草就会闭合哦！
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 闭合后的重置提示 */}
      <AnimatePresence>
        {isClosed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-center"
          >
            <p className="text-emerald-600 font-medium">点击叶子重新打开捕蝇草</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlytrapInteractive;