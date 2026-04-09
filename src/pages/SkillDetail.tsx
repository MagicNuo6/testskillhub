import { Star, Download, Search, FileText, CheckCircle, Sparkles, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';

const relatedSkills = [
  {
    id: 'creative-writing',
    title: '创意写作助手',
    description: '激发写作灵感，自动生成文学大纲与角色设定。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCff9rSEXH27TQXqhBKp8idkTlD6owhiHp_8av_fZZjqoPapTa1FDDKM4ccPjWYUq1KJX9d3Q1EuWvO9voG0WuJoVRO8yqlK8QM2U2h5JTYck2ZtZ_fkFm-3QAPjTQymHFtXjq0kYBiqhKjVfxcTpfZPPV19wVLH6RwHRlQJwDx8-9Y6El98cpvxcGBBuxDp3PvtjtK2lNKkJyM-WSFb7QFizKRaYPnTVzmNHVGRlkWOnuDsRC1k2UtVshf1XbjVVF7MP-KvgnnuCWs'
  },
  {
    id: 'ppt-outline',
    title: 'PPT大纲生成',
    description: '一键提取文章重点，转化为精美的幻灯片逻辑。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRPQqbK7RtBgInIVDBhCEa1GUoSAMP-aeywlJecsLxSrn7u23kwIXKC1Dmt-BiaFNevTshZ--J3qt9lPHBrH1XfHzYHbX0AjVWOPwH90qEjwzt2jIWbRwDZq1A9JZKQ_NalxCfizpCeL5bYOp77oApsPAxbj9fYodluIiwEKpQcVubY6CoE9Eo06HlhCSzEjkDFFUqtuZIJjIBhNUY0UOL4CXa662-BQo6FzEiT_QuhZoNRHC9XjIcnRF7r06mm841IqF82VcGfW-v'
  },
  {
    id: 'translation',
    title: '外语课件翻译',
    description: '保持排版不变，专业级教育术语精准翻译。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTY1WqBzW-kLhbdbQ7myT7zRILqaSZSUIdEcqlwi62MlooszQBLYtoSU29xnK6ZHcS6_4K6kkYprYTa9xebnBpR3HGp48ke-QdvhaA66aQoRIeAQKr-imszoFHHkg0tznE3LkoB50EaYnWZj_j15ty2phTaFICZjbrErfvRLF3FBKaY5yRcPt_Y2iDE722RGOjyI7Ulvq__nrAF_bRYd6xGWlQ68UM7kSpckH5-wW6SZ5-0MXGANyhKP3AgqG75WCQ_6bIaqgYBx52'
  }
];

export default function SkillDetail() {
  const { id } = useParams();

  return (
    <main className="pt-[72px] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-surface-container-low py-16 lg:py-24">
        <div className="absolute -right-20 top-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 bottom-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">Education Tech</span>
              <div className="flex items-center gap-1 text-on-surface-variant text-sm">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="font-bold text-on-surface">4.9</span>
                <span>(1.2k+ reviews)</span>
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-on-surface leading-tight font-headline">智能教案生成器</h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">基于先进的LLM模型，助力教师在几秒钟内生成符合国家课程标准的高质量、结构化教学方案。告别繁琐的排版与构思。</p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="px-10 py-4 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white text-lg font-bold shadow-lg shadow-primary/20 hover:translate-y-[-2px] active:translate-y-[1px] transition-all">
                立即体验
              </button>
              <button className="px-10 py-4 rounded-xl border border-outline-variant/30 text-primary font-bold hover:bg-white transition-all flex items-center gap-2">
                <Download className="w-5 h-5" />
                下载离线版
              </button>
              <span className="text-on-surface-variant text-sm font-medium ml-2">累计生成 128,492 次</span>
            </div>
          </div>
          <div className="w-full lg:w-1/3 aspect-square rounded-3xl overflow-hidden shadow-2xl relative group">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaN1QwiZIBihCOO-mYRoCh8tj5rBpIzZbVtnl_eE5cJzawNBJ_mkiDF1Jc-ofFD9qb6ILWhb_yOs9qjhTTXAh06FMXUAVQ-rplJUathQ6Fskx1w2Fsse8m4sqgSftU2_ZahE7IdLUInGZRFPAVQ4ZWgrrpJMhj4CoyK37mhJeYfTQq2C25vacrzkjPOGRH7MnGJOILar_JinXBcipFlxo0Ay1sjNURdw01XEk83vLruDXbjRJ7vSOywG7R68nq7I3SWcWmztrPrtgX" 
              alt="Lesson Plan Generator UI"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Tabbed Interface */}
        <div className="lg:col-span-8">
          <div className="flex gap-10 mb-12 border-b border-outline-variant/15 overflow-x-auto hide-scrollbar">
            <button className="pb-4 text-primary border-b-2 border-primary font-bold text-lg whitespace-nowrap">概述</button>
            <button className="pb-4 text-on-surface-variant hover:text-on-surface transition-colors font-semibold text-lg whitespace-nowrap">功能特点</button>
            <button className="pb-4 text-on-surface-variant hover:text-on-surface transition-colors font-semibold text-lg whitespace-nowrap">使用指南</button>
            <button className="pb-4 text-on-surface-variant hover:text-on-surface transition-colors font-semibold text-lg whitespace-nowrap">用户评价</button>
          </div>
          
          <article className="space-y-12">
            <section className="space-y-6">
              <h2 className="text-2xl font-bold font-headline">为什么选择智能教案生成器？</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                传统的教案编写往往耗费数小时。我们的AI引擎经过深度优化，理解不同学科的教学逻辑，不仅能生成内容，还能根据学情分析提供差异化的教学建议。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">支持多种教案格式</h3>
                  <p className="text-on-surface-variant">从简案到详案，支持Markdown, PDF, Word等多种导出格式，满足不同学校的要求。</p>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">自动匹配课程标准</h3>
                  <p className="text-on-surface-variant">内置全国中小学各学科最新课程标准，确保教学重点、难点准确无误。</p>
                </div>
              </div>
            </section>

            <section className="p-8 rounded-3xl bg-secondary/5 border border-secondary/10 space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-2 font-headline">
                <Sparkles className="w-6 h-6 text-secondary" />
                智能生成演示
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-xs text-on-surface-variant ml-2">Preview: 七年级下册 - 桃花源记.docx</span>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-surface-container-low rounded-full w-1/4"></div>
                  <div className="h-4 bg-surface-container-low rounded-full w-full"></div>
                  <div className="h-4 bg-surface-container-low rounded-full w-full"></div>
                  <div className="h-4 bg-surface-container-low rounded-full w-3/4"></div>
                  <div className="flex gap-2 pt-4">
                    <div className="px-3 py-1 rounded-full bg-surface-container-low text-[10px] font-bold">教学目标</div>
                    <div className="px-3 py-1 rounded-full bg-surface-container-low text-[10px] font-bold">重难点分析</div>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>

        {/* Right: Sidebar */}
        <aside className="lg:col-span-4 space-y-10">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center justify-between font-headline">
              相关技能
              <Link to="/discovery" className="text-primary text-sm font-semibold hover:underline">查看更多</Link>
            </h3>
            <div className="space-y-4">
              {relatedSkills.map((skill) => (
                <div key={skill.id} className="flex gap-4 p-4 rounded-2xl hover:bg-surface-container-low transition-colors group cursor-pointer">
                  <div className="w-16 h-16 rounded-xl bg-surface-container-high overflow-hidden shrink-0">
                    <img className="w-full h-full object-cover" src={skill.image} alt={skill.title} referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold group-hover:text-primary transition-colors font-headline">{skill.title}</h4>
                    <p className="text-sm text-on-surface-variant line-clamp-2">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-on-surface text-surface relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h3 className="text-xl font-bold font-headline">加入教师社区</h3>
              <p className="text-surface/70 text-sm">与全球 50,000+ 老师共同交流 AI 教学心得，获取独家优质提示词。</p>
              <button className="w-full py-3 rounded-xl bg-surface text-on-surface font-bold hover:bg-surface/90 transition-all">立即加入</button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
        </aside>
      </div>
    </main>
  );
}
