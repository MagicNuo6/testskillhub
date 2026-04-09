import { useState, useMemo } from 'react';
import { Search, Edit3, Calculator, Languages, Microscope, FlaskConical, Brain, History, Globe, Landmark, Terminal, Settings, Palette, Music, ArrowRight, UserCircle, GraduationCap, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';

const subjects = [
  { id: 'chinese', name: '语文', icon: <Edit3 className="w-5 h-5" />, category: 'humanities' },
  { id: 'math', name: '数学', icon: <Calculator className="w-5 h-5" />, category: 'science' },
  { id: 'english', name: '英语', icon: <Languages className="w-5 h-5" />, category: 'languages' },
  { id: 'physics', name: '物理', icon: <Microscope className="w-5 h-5" />, category: 'science' },
  { id: 'chemistry', name: '化学', icon: <FlaskConical className="w-5 h-5" />, category: 'science' },
  { id: 'biology', name: '生物', icon: <Brain className="w-5 h-5" />, category: 'science' },
  { id: 'history', name: '历史', icon: <History className="w-5 h-5" />, category: 'humanities' },
  { id: 'geography', name: '地理', icon: <Globe className="w-5 h-5" />, category: 'humanities' },
  { id: 'politics', name: '政治', icon: <Landmark className="w-5 h-5" />, category: 'humanities' },
  { id: 'it', name: '信息技术', icon: <Terminal className="w-5 h-5" />, category: 'tech' },
  { id: 'tech', name: '通用技术', icon: <Settings className="w-5 h-5" />, category: 'tech' },
  { id: 'art', name: '美术', icon: <Palette className="w-5 h-5" />, category: 'arts' },
  { id: 'music', name: '音乐', icon: <Music className="w-5 h-5" />, category: 'arts' },
];

const teacherSkills = [
  {
    id: 'teacher-1',
    title: '智能教案生成器',
    description: '输入课题与学情，秒级生成符合新课标的结构化教案。支持差异化教学建议。',
    tag: '教师专用',
    icon: <Edit3 className="w-6 h-6" />,
    color: 'text-primary bg-primary/10'
  },
  {
    id: 'teacher-2',
    title: 'PPT课件大纲助手',
    description: '一键提取教材重点，自动生成逻辑严密的幻灯片大纲，支持导出多种格式。',
    tag: '教研提效',
    icon: <Palette className="w-6 h-6" />,
    color: 'text-secondary bg-secondary/10'
  }
];

const studentSkills = [
  {
    id: 'student-1',
    title: '错题深度解析',
    description: '拍照或输入题目，AI 不仅给出答案，更提供解题思路拆解与知识点关联。',
    tag: '学生专用',
    icon: <Calculator className="w-6 h-6" />,
    color: 'text-green-600 bg-green-500/10'
  },
  {
    id: 'student-2',
    title: '英语地道口语陪练',
    description: '实时对话纠音，模拟雅思/托福场景，让你的口语更地道。',
    tag: '语言学习',
    icon: <Languages className="w-6 h-6" />,
    color: 'text-primary bg-primary/10'
  }
];

const allSkills = [
  {
    id: 'math-1',
    title: '数学·几何模型动态拆解',
    description: '输入公式，自动生成可交互的3D几何模型。支持动态参数调整，直观展示空间几何逻辑。',
    tag: '初中/高中',
    icon: <Calculator className="w-6 h-6" />,
    color: 'text-primary bg-primary/10'
  },
  {
    id: 'english-1',
    title: '英语·地道口语陪练助手',
    description: '基于大语言模型的实时纠音与情景对话。支持多角色切换，模拟真实雅思/托福考试场景。',
    tag: '通用教育',
    icon: <Languages className="w-6 h-6" />,
    color: 'text-secondary bg-secondary/10'
  },
  {
    id: 'history-1',
    title: '历史·纪年大事记智绘',
    description: '自动整理零散历史知识点，生成精美的信息图表。支持横向对比全球同期重大历史事件。',
    tag: '初中/高中',
    icon: <History className="w-6 h-6" />,
    color: 'text-green-600 bg-green-500/10'
  },
  {
    id: 'physics-1',
    title: '物理·虚拟实验室助手',
    description: '模拟力学、电学、光学等复杂实验。通过调整变量实时观察数据反馈，安全高效。',
    tag: '高中/职教',
    icon: <Microscope className="w-6 h-6" />,
    color: 'text-primary bg-primary/10'
  }
];

const levels = ['小学教育', '初中教育', '高中教育', '职业教育', '高等教育', '企业培训'];

export default function Discovery() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role');
  
  const [selectedLevel, setSelectedLevel] = useState('全部');
  const [selectedSubject, setSelectedSubject] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');

  const displaySkills = useMemo(() => {
    let baseSkills = role === 'teacher' ? teacherSkills : role === 'student' ? studentSkills : allSkills;
    
    return baseSkills.filter(skill => {
      const matchesLevel = selectedLevel === '全部' || skill.tag.includes(selectedLevel.replace('教育', ''));
      const matchesSubject = selectedSubject === '全部' || skill.title.includes(selectedSubject);
      const matchesSearch = skill.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           skill.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesLevel && matchesSubject && matchesSearch;
    });
  }, [role, selectedLevel, selectedSubject, searchQuery]);

  const titlePrefix = role === 'teacher' ? '教师版' : role === 'student' ? '学生版' : '';

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto pt-[72px] min-h-screen">
      {/* Mobile Category Toggle - Two Rows */}
      <div className="lg:hidden flex flex-col bg-surface border-b border-outline-variant/10 sticky top-[72px] z-30">
        {/* Row 1: Levels */}
        <div className="flex overflow-x-auto p-3 gap-2 hide-scrollbar border-b border-outline-variant/5">
          {['全部', ...levels].map((level) => (
            <button 
              key={level} 
              onClick={() => setSelectedLevel(level)}
              className={`px-4 py-1.5 rounded-full whitespace-nowrap text-xs font-bold transition-all ${selectedLevel === level ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant'}`}
            >
              {level}
            </button>
          ))}
        </div>
        {/* Row 2: Subjects */}
        <div className="flex overflow-x-auto p-3 gap-2 hide-scrollbar">
          <button 
            onClick={() => setSelectedSubject('全部')}
            className={`px-4 py-1.5 rounded-full whitespace-nowrap text-xs font-bold transition-all ${selectedSubject === '全部' ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant'}`}
          >
            全部学科
          </button>
          {subjects.map((sub) => (
            <button 
              key={sub.id} 
              onClick={() => setSelectedSubject(sub.name)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full whitespace-nowrap text-xs font-medium transition-all ${selectedSubject === sub.name ? 'bg-primary/10 text-primary ring-1 ring-primary/20' : 'bg-surface-container-low text-on-surface-variant'}`}
            >
              {sub.icon}
              {sub.name}
            </button>
          ))}
        </div>
      </div>

      {/* SideNavBar */}
      <aside className="hidden lg:flex flex-col p-6 sticky top-[72px] h-[calc(100vh-72px)] w-64 bg-surface dark:bg-on-surface overflow-y-auto hide-scrollbar border-r border-outline-variant/10">
        <div className="mb-10">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4 font-headline opacity-60">学段分类</h2>
          <div className="flex flex-col gap-1">
            {['全部', ...levels].map((level) => (
              <div 
                key={level} 
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-2.5 rounded-xl text-[13px] font-bold cursor-pointer transition-all ${selectedLevel === level ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
              >
                {level}
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4 font-headline opacity-60">学科筛选</h2>
          <nav className="space-y-1">
            <div 
              onClick={() => setSelectedSubject('全部')}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all cursor-pointer ${selectedSubject === '全部' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-on-surface/70 hover:bg-surface-container-low'}`}
            >
              <Filter className="w-5 h-5" />
              <span className="text-[13px] font-semibold tracking-wide font-label">全部学科</span>
            </div>
            {subjects.map((sub) => (
              <div 
                key={sub.id} 
                onClick={() => setSelectedSubject(sub.name)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all cursor-pointer ${selectedSubject === sub.name ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-on-surface/70 hover:bg-surface-container-low hover:translate-x-1 duration-300'}`}
              >
                {sub.icon}
                <span className="text-[13px] font-semibold tracking-wide font-label">{sub.name}</span>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Content Area */}
      <section className="flex-1 p-6 lg:p-12 bg-surface-container-low">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            {role === 'teacher' && <UserCircle className="w-6 h-6 text-primary" />}
            {role === 'student' && <GraduationCap className="w-6 h-6 text-secondary" />}
            <span className="text-sm font-bold text-primary uppercase tracking-widest">{titlePrefix} 技能大全</span>
          </div>
          <h1 className="text-4xl lg:text-[3.5rem] font-bold leading-tight tracking-tight text-on-surface font-headline">
            探索 <span className="text-primary">AI 技能</span>
          </h1>
          
          {/* Desktop Inline Filter - Two Rows */}
          <div className="hidden lg:flex flex-col gap-4 mt-10 p-6 bg-surface-container-lowest rounded-3xl shadow-sm border border-outline-variant/10">
            <div className="flex items-center gap-6">
              <span className="text-xs font-bold text-outline uppercase tracking-widest shrink-0 w-12">学段</span>
              <div className="flex flex-wrap gap-2">
                {['全部', ...levels].map((level) => (
                  <button 
                    key={level} 
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${selectedLevel === level ? 'bg-primary text-white shadow-md' : 'hover:bg-surface-container-low text-on-surface-variant'}`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-px bg-outline-variant/10 w-full"></div>
            <div className="flex items-center gap-6">
              <span className="text-xs font-bold text-outline uppercase tracking-widest shrink-0 w-12">学科</span>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setSelectedSubject('全部')}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${selectedSubject === '全部' ? 'bg-primary text-white shadow-md' : 'hover:bg-surface-container-low text-on-surface-variant'}`}
                >
                  全部
                </button>
                {subjects.map((sub) => (
                  <button 
                    key={sub.id} 
                    onClick={() => setSelectedSubject(sub.name)}
                    className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${selectedSubject === sub.name ? 'bg-primary/10 text-primary ring-1 ring-primary/20' : 'hover:bg-surface-container-low text-on-surface-variant'}`}
                  >
                    {sub.icon}
                    {sub.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative max-w-2xl mt-8 group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="w-6 h-6 text-outline" />
            </div>
            <input 
              className="w-full h-16 pl-16 pr-8 bg-surface-container-lowest rounded-2xl border-0 shadow-[0_20px_50px_rgba(0,88,188,0.08)] focus:ring-2 focus:ring-primary/20 transition-all text-lg placeholder:text-outline/60 font-body" 
              placeholder="搜索你感兴趣的 AI 技能..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-3 inset-y-3">
              <button className="h-full px-6 bg-primary text-white rounded-xl font-semibold hover:bg-primary-container transition-colors">
                搜索
              </button>
            </div>
          </div>
        </header>

        {/* Bento Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Main Featured Card - Only show on all or teacher and when no filters active */}
          {(!role || role === 'teacher') && selectedLevel === '全部' && selectedSubject === '全部' && searchQuery === '' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:col-span-2 xl:col-span-2 relative group overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_12px_32px_-4px_rgba(27,28,28,0.06)] aspect-[21/9]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
              <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold tracking-widest uppercase mb-4 w-fit">新特性</span>
                <h3 className="text-3xl font-bold text-on-surface mb-2 font-headline">语文·古诗词意境生成器</h3>
                <p className="text-on-surface-variant max-w-md font-body">一键将抽象的古诗词转化为意境深远的视觉插画，辅助课堂沉浸式教学。</p>
                <button className="mt-6 w-fit bg-primary text-white px-8 py-3 rounded-full font-bold hover:scale-105 active:scale-95 transition-all">立即体验</button>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWtZo2JGxHHaWTtadJ-7Vv3n4HBKjsI_cbKI4ScVonoAChwTcIGcFmLWY3BZPz0z6C8RMeEKFC2LK2TVCsi8bX5IPTDqsmbzR6FLCWRrqG4q5e7_1zvuMFW3sPf0XoExReM4fz90YnMyNZCIL8ezI6AV9mP1yhXiJMsPJw0IavfkpZC-eQBWH91Gp2F1BgpT18byQVM62JxaejmbMo5N-4h3cpu2qGr2A4C37LpfKvwtHxP24sqLSt3u9_yfuK7xElDHzez1rnLo4g" 
                  alt="Traditional Chinese landscape"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          )}

          <AnimatePresence mode="popLayout">
            {displaySkills.length > 0 ? (
              displaySkills.map((skill) => (
                <motion.div
                  layout
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={`/skill/${skill.id}`} className="rounded-xl bg-surface-container-lowest p-8 flex flex-col h-full hover:translate-y-[-4px] transition-all duration-300 shadow-[0_4px_24px_-4px_rgba(27,28,28,0.04)]">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3 font-headline">{skill.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed font-body">{skill.description}</p>
                    <div className="mt-auto pt-6 flex items-center justify-between">
                      <span className="text-xs font-bold text-outline uppercase tracking-wider font-label">{skill.tag}</span>
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-6 text-outline">
                  <Search className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">未找到相关技能</h3>
                <p className="text-on-surface-variant">尝试调整筛选条件或搜索关键词</p>
                <button 
                  onClick={() => { setSelectedLevel('全部'); setSelectedSubject('全部'); setSearchQuery(''); }}
                  className="mt-6 text-primary font-bold hover:underline"
                >
                  重置所有筛选
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
