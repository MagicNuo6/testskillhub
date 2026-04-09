import { Search, Database, Sparkles, GraduationCap, ArrowRight, UserCircle, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const hotSkills = [
  {
    id: '1',
    title: '高级文案改写器',
    description: '基于 GPT-4 的深度改写，让你的营销文案更具感染力与穿透力。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA24ciRk-u9gNfPob2eV57qgyvt7a2CWD8mvUy6xXaSriil7BcbXAaz8t-VzZZAbu16SX3vRVVFrlyInaFEVze4CMtS4AWWpzGk7F6nSihrJVctCOEq_1lBwL8DddVX3p5xtlaCCMr2z7HBAj2WbV6YJhoODtTo_OrwvPApVBfmAlS6lUXr7vU9enu0vSq9VKxBO7JyIjwydK8Mg86ZDoI0_ULBy_AqiLesREhC94rGUqN_LfI_mQXFM7BzCX7upGeMTelb2LiNv_NQ',
    users: '1.2k+',
    hot: true
  },
  {
    id: '2',
    title: 'Python 自动化大师',
    description: '通过对话生成专业的自动化脚本，处理 Excel、数据采集与邮件群发。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8i-EPrxgQLJTr2RvWlaOKL0QCOfFNZhuTBSJ9h9IvRGQKaekdo8BGSJAdemAF0_UnDCzenwmcksHvw1vghafq9LLjJsJZ88prkFlgD8aNzbHlrpxJqW66CQAVKnOWZobkrwdM-aYD9mAG-inEc8Gu9JOOdHHl4DJ0U3NVDl4G3js6FXdQimtDf9C0IGUCdyqMRNgI_GPfHrVahbYpCjRj2O1mr7sVBHK7xqJFhe2HwAMCiheNXZwGJOOIWBcDSA5Lkaxwka5xduQe',
    users: '850'
  },
  {
    id: '3',
    title: 'Midjourney 咒语师',
    description: '精准掌握参数与词根，生成电影级质感的商业视觉图像，加速设计流程。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDq5ogDiI01wudJOT8sS5TXabLehecAYw14Fn6K5AJkFKRvLmGAPHQZ0pUpXl1gOZwiR92K_ey8h7RJ6Cbj1wy8a6M3Mghx7cJmJIcHfIqPhuArp7Pdo1vfl17F_1xIlP_UbxFCZxi9Ew2SMyPpE7eDc2-eUUGQLa_v_GlIcnPFu3EQdEBmfI_Lztjt3Tpf-sBZQ9y9_rTfR0yD13rxaY1uRXiscp11uj3SMuKsF0SldFfTl82pSwKqPuQvojKn3s2iKC_0tKgj0tyk',
    users: '2.4k+'
  },
  {
    id: '4',
    title: 'AI 知识库搭建',
    description: '利用 RAG 技术搭建属于自己的私人/企业级智能知识检索助手。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjdXuHkSGn9-9Ckq9kBCgpyu5ddsJiUzjiPzSTigbpjkg54APHJGvSGpdt-DgNHTcP_RuqdU8B60hEuGQsjBuHu3xYCig-YXW3Cj7ZbzO6DHkTitnmBEBGzHrQnaOsNE6GQkDvaqYihiUVr6zr6fflS7xU0YNGSIwkHdKeB7tmpZ1t0tXllpY60MYTJvFx9gvGZfsdLQOQjHOBCbowN5iJNt8GVJ6P9kelrFw-ScEe0RSSy6jqC436Wdrr54nXfHe9OL06NDezpaE6',
    users: '560'
  }
];

export default function Home() {
  return (
    <main className="pt-[72px]">
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-on-surface font-headline"
          >
            探索高效的 <span className="text-primary">AI 技能</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12"
          >
            在 OpenClaw Skills，我们为你策展全球最前沿的 AI 应用场景，助你掌握未来的生产力。
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-2xl mx-auto group"
          >
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="w-6 h-6 text-outline" />
            </div>
            <input 
              className="w-full h-16 pl-16 pr-8 bg-surface-container-lowest rounded-2xl border-0 shadow-[0_20px_50px_rgba(0,88,188,0.08)] focus:ring-2 focus:ring-primary/20 transition-all text-lg placeholder:text-outline/60" 
              placeholder="搜索你感兴趣的 AI 技能..." 
              type="text"
            />
            <div className="absolute right-3 inset-y-3">
              <button className="h-full px-6 bg-primary text-white rounded-xl font-semibold hover:bg-primary-container transition-colors">
                搜索
              </button>
            </div>
          </motion.div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="text-sm font-medium text-outline uppercase tracking-widest">推荐词:</span>
            {['数学解题', '文案写作', '代码生成'].map((tag) => (
              <a key={tag} className="px-4 py-1.5 bg-surface-container-low hover:bg-surface-container-high rounded-full text-xs font-medium transition-colors" href="#">{tag}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Identity Selection Section */}
      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline mb-4">选择你的身份，开启定制体验</h2>
          <p className="text-on-surface-variant">根据你的角色，我们将为你推荐最适合的 AI 技能</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link 
            to="/discovery?role=teacher"
            className="group relative overflow-hidden rounded-[2.5rem] bg-primary p-10 text-white shadow-2xl hover:shadow-primary/30 transition-all duration-500"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UserCircle className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-4 font-headline">我是教师</h3>
              <p className="text-white/80 text-lg mb-8 max-w-xs">获取智能教案、课件生成、学情分析等专业教研工具。</p>
              <div className="mt-auto flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                进入教师技能大全 <ChevronRight className="w-5 h-5" />
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
          </Link>

          <Link 
            to="/discovery?role=student"
            className="group relative overflow-hidden rounded-[2.5rem] bg-secondary p-10 text-white shadow-2xl hover:shadow-secondary/30 transition-all duration-500"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-4 font-headline">我是学生</h3>
              <p className="text-white/80 text-lg mb-8 max-w-xs">探索错题解析、口语陪练、知识点拆解等高效学习工具。</p>
              <div className="mt-auto flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                进入学生技能大全 <ChevronRight className="w-5 h-5" />
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
          </Link>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-surface-container-lowest rounded-[2rem] flex flex-col gap-6 shadow-sm border border-outline-variant/15 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <Database className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 font-headline">海量资源</h3>
              <p className="text-on-surface-variant leading-relaxed">
                覆盖从日常办公到专业研发的 1000+ 精选技能，每日实时更新，确保你掌握最新动态。
              </p>
            </div>
          </div>
          <div className="p-10 bg-surface-container-lowest rounded-[2rem] flex flex-col gap-6 shadow-sm border border-outline-variant/15 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 font-headline">智能生成</h3>
              <p className="text-on-surface-variant leading-relaxed">
                结合最先进的大语言模型，一键生成提示词与工作流，让 AI 真正为你所用。
              </p>
            </div>
          </div>
          <div className="p-10 bg-surface-container-lowest rounded-[2rem] flex flex-col gap-6 shadow-sm border border-outline-variant/15 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-600">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 font-headline">专业教育</h3>
              <p className="text-on-surface-variant leading-relaxed">
                行业专家背书，系统的课程体系与分级实战，助你从零基础跨越到 AI 专家。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Skills Section */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Recommended</span>
              <h2 className="text-4xl font-bold font-headline">热门技能</h2>
            </div>
            <Link to="/discovery" className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              查看全部大全
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotSkills.map((skill) => (
              <Link key={skill.id} to={`/skill/${skill.id}`} className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    src={skill.image} 
                    alt={skill.title}
                    referrerPolicy="no-referrer"
                  />
                  {skill.hot && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm">热门</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold mb-2 font-headline">{skill.title}</h4>
                  <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">{skill.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full border-2 border-white bg-surface-container-low"></div>
                      <div className="w-6 h-6 rounded-full border-2 border-white bg-surface-container-high"></div>
                    </div>
                    <span className="text-xs text-outline font-medium">{skill.users} 人正在用</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-headline">准备好提升你的 AI 技能了吗？</h2>
              <p className="text-white/80 text-lg">加入 10,000+ 学习者，每周接收最新的技能更新与实战案例。</p>
            </div>
            <div className="w-full md:w-auto">
              <button className="w-full md:w-auto px-10 py-5 bg-white text-primary font-bold rounded-2xl text-lg hover:bg-surface-container-lowest transition-colors shadow-xl">
                立即开始探索
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
