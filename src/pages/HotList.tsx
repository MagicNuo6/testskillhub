import { TrendingUp, TrendingDown, Minus, Code, Sparkles, BookOpen, PenTool, Languages } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const hotList = [
  {
    rank: '01',
    title: '论文伴读助手',
    tag: '教师',
    description: '通过深度解析长篇学术论文，自动生成关键摘要、术语表及研究背景，助力快速掌握领域前沿。',
    hotValue: '98.4k',
    trend: 'up',
    icon: <BookOpen className="w-12 h-12 text-primary" />,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApGJm6UPg1Kv0zi7N853yb7lU-KiNDj5bLV4Mu7Pwnb9EvX3WSi2kRZ6GvOgYvri4EfHOtaa06ih3M6TVTevyGepwirslVCmOKdnMc_EKkiQzc5UMNOQLkjRQvf7LylDyPc4BT47pQyx7YwP92-tXPh61f4nkowiQBsVviJVY6oYNVkWRcUwcalFRNkRYSiCxoihkrQ5ynLQ8HjY4fMmFOV1PfieKdBi-M02myqDkehvPOE9ogcxpl5A6AzLScmEvx-hrOcO_vBh64'
  },
  {
    rank: '02',
    title: '创意短视频脚本专家',
    tag: '学生',
    description: '基于爆款逻辑与社交媒体趋势，一键生成具有传播力的口播脚本与拍摄指南。',
    hotValue: '85.2k',
    trend: 'up',
    icon: <Sparkles className="w-12 h-12 text-secondary" />,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVQAadmZfYTq-d-RCPx3qwqNhEH5outgWofmyuBOMTUu56QRKuT365vjdDq8GElSpg41YwhM-qQXHl_V30wayjkfCVz6bY6arBLSIRhQ_4P7e45yGJzAA5-zyx6fjZ1BOC-hgKoHj43hBk4C6hkQvLROsskCGSW-BWMCo47koZAmXu8f5f0icHo8SSuFnJ1sgSIsk14NubsW9PhWmDc9ifsyQV82AxzkbgIlAVbBh2MTWgE7S8lecnjzVp7DLdc7Bi_W0TdazD4Jcu'
  },
  {
    rank: '03',
    title: '跨文化地道表达助手',
    tag: '教师',
    description: '精准纠正翻译腔，将生硬的中英互译转化为地道、得体的商务或社交语境表达。',
    hotValue: '72.9k',
    trend: 'neutral',
    icon: <Languages className="w-12 h-12 text-primary" />,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoTGz8XAc5Vi6ocyRse1ZtgB-pZXhPVvrjrrFINwiBARo0CiwduRTBB0TZluNyACxFK9SG6kCSiwfmKm3h0awxyYSosu4le9Zkp4X6f84zui8BZgfBu5p9-yNr250Y8rpZsznwU90-IAmFA8K8uA5jtIc8pyCJ2h_4P4Od353OaNZ2xd_nbh-Rd8by6y7RB-Ph-xYOqvFz4BzgEY6zxJUJRJY3ti172kouMBHdRMueAbPslLNoT_Dr2x8bA3myhOVocAHneaNaVF6i'
  }
];

const secondaryList = [
  {
    rank: '04',
    title: '代码逻辑优化器',
    tag: '开发者',
    description: '针对冗余代码提供重构建议，提升运行效率并确保最佳实践。',
    hotValue: '42.1k',
    trend: 'up',
    icon: <Code className="w-6 h-6 text-outline" />
  },
  {
    rank: '05',
    title: '营销文案魔术师',
    tag: '学生',
    description: '输入关键词，快速生成适配不同平台的带货文案、广告语与品牌故事。',
    hotValue: '38.5k',
    trend: 'neutral',
    icon: <PenTool className="w-6 h-6 text-outline" />
  }
];

export default function HotList() {
  return (
    <main className="pt-32 pb-20 max-w-7xl mx-auto px-8">
      <div className="mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight mb-2 text-on-surface font-headline">实时热榜</h1>
        <p className="text-on-surface-variant font-medium">洞察当下最受欢迎的智能助手与技能工具</p>
      </div>

      <div className="space-y-4">
        {hotList.map((item) => (
          <motion.div 
            key={item.rank}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative bg-surface-container-lowest rounded-[2rem] p-8 flex items-center transition-all duration-300 hover:shadow-[0_24px_48px_-12px_rgba(27,28,28,0.08)]"
          >
            <div className="w-16 flex flex-col items-center justify-center mr-8">
              <span className={`text-4xl font-black italic leading-none ${item.rank === '01' ? 'text-primary' : item.rank === '02' ? 'text-secondary' : 'text-on-surface-variant'}`}>
                {item.rank}
              </span>
              <div className={`w-1.5 h-1.5 rounded-full mt-2 ${item.rank === '01' ? 'bg-primary' : item.rank === '02' ? 'bg-secondary' : 'bg-on-surface-variant opacity-30'}`}></div>
            </div>
            
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mr-8 overflow-hidden ${item.rank === '01' ? 'bg-primary/10' : item.rank === '02' ? 'bg-secondary/10' : 'bg-surface-container-low'}`}>
              <img src={item.image} alt={item.title} className="w-12 h-12" referrerPolicy="no-referrer" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-2xl font-bold text-on-surface font-headline">{item.title}</h3>
                <span className={`px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase ${item.tag === '教师' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                  {item.tag}
                </span>
              </div>
              <p className="text-on-surface-variant leading-relaxed line-clamp-1">{item.description}</p>
            </div>

            <div className="flex flex-col items-end gap-4 ml-12">
              <div className="text-right">
                <div className="flex items-center gap-1 text-on-surface font-bold text-lg">
                  {item.trend === 'up' ? <TrendingUp className="w-5 h-5 text-red-500" /> : <Minus className="w-5 h-5 text-primary" />}
                  {item.hotValue}
                </div>
                <span className="text-[11px] font-bold text-outline uppercase tracking-tighter">实时热度</span>
              </div>
              <Link to={`/skill/${item.rank}`} className={`px-8 py-3 rounded-full font-bold transition-all active:scale-95 ${item.rank === '01' ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-primary/30' : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high'}`}>
                去体验
              </Link>
            </div>
          </motion.div>
        ))}

        <div className="h-[1px] bg-outline-variant/15 my-4 mx-8"></div>

        {secondaryList.map((item) => (
          <motion.div 
            key={item.rank}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group bg-surface-container-lowest/50 rounded-2xl p-6 flex items-center transition-all duration-300 hover:bg-surface-container-lowest"
          >
            <div className="w-16 flex justify-center mr-8">
              <span className="text-xl font-bold text-outline/50 italic leading-none">{item.rank}</span>
            </div>
            <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center mr-8">
              {item.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-lg font-bold text-on-surface font-headline">{item.title}</h3>
                <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant text-[10px] font-bold tracking-wider uppercase">
                  {item.tag}
                </span>
              </div>
              <p className="text-on-surface-variant text-sm line-clamp-1">{item.description}</p>
            </div>
            <div className="flex items-center gap-12 ml-12">
              <div className="text-right">
                <div className="flex items-center justify-end gap-1 text-on-surface font-semibold">
                  {item.trend === 'up' ? <TrendingUp className="w-4 h-4 text-red-500" /> : <Minus className="w-4 h-4 text-primary" />}
                  {item.hotValue}
                </div>
              </div>
              <Link to={`/skill/${item.rank}`} className="text-primary font-bold text-sm hover:underline">去体验</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
