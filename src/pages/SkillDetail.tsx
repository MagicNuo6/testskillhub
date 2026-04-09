import { useState } from 'react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  Star, 
  Download, 
  History, 
  Share2, 
  Heart, 
  CheckCircle2, 
  User, 
  Calendar, 
  Info,
  FileText,
  Clock
} from 'lucide-react';
import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';

const relatedSkills = [
  {
    id: 'homework-assistant',
    title: '作业批改助手',
    description: 'AI 辅助批改学生作业，提供详细评语和改进建议...',
    rating: 4.8,
    downloads: '12.3k',
    verified: true
  },
  {
    id: 'exam-generator',
    title: '试卷智能组卷',
    description: '根据知识点和难度要求，智能组合试题，支持...',
    rating: 4.7,
    downloads: '9.8k',
    verified: true
  }
];

export default function SkillDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <main className="pt-[72px] min-h-screen bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Back Link */}
        <Link 
          to="/discovery?role=teacher" 
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          返回教师中心
        </Link>

        {/* Main Header Card */}
        <section className="bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/10 mb-12">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="space-y-6 flex-1">
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-bold text-on-surface font-headline">智能教案生成器</h1>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-5 h-5 text-primary/60" />
                  <Zap className="w-5 h-5 text-green-500/60" />
                </div>
              </div>
              
              <p className="text-xl text-on-surface-variant leading-relaxed">
                根据课程标准和教学目标，自动生成结构化教案，支持个性化调整
              </p>

              <div className="flex flex-wrap gap-2">
                {['小学教育', '语文', 'MIT'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-surface-container-low text-on-surface-variant rounded-lg text-sm font-medium border border-outline-variant/10">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-on-surface-variant pt-2">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                  <span className="font-bold text-on-surface">4.9</span>
                  <span>评分</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Download className="w-4 h-4" />
                  <span className="font-bold text-on-surface">15.6k</span>
                  <span>下载</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Info className="w-4 h-4" />
                  <span className="font-bold text-on-surface">v2.1.0</span>
                  <span>版本</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span className="font-bold text-on-surface">2024-01-15</span>
                  <span>更新</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                <User className="w-4 h-4" />
                <span>OpenClaw 教育团队</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Tabs Area */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/10 overflow-hidden">
            {/* Tab Headers */}
            <div className="flex border-b border-outline-variant/10 px-8">
              {[
                { id: 'overview', label: '概述', icon: <FileText className="w-4 h-4" /> },
                { id: 'install', label: '安装方式', icon: <Download className="w-4 h-4" /> },
                { id: 'history', label: '历史版本', icon: <History className="w-4 h-4" /> }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-5 font-bold text-sm transition-all relative ${
                    activeTab === tab.id ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-10">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold flex items-center gap-2 font-headline">
                      <Zap className="w-5 h-5 text-orange-400" />
                      功能特点
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        '支持多种教案格式（详案/简案）',
                        '自动匹配课程标准，确保教学目标准确',
                        '个性化调整建议，适配不同班级学情',
                        '精美排版一键导出（PDF/Word）'
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-low border border-outline-variant/5">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span className="text-on-surface-variant font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'install' && (
                <div className="space-y-4 text-on-surface-variant">
                  <h2 className="text-xl font-bold text-on-surface font-headline mb-4">安装说明</h2>
                  <p>1. 下载安装包后解压到指定目录。</p>
                  <p>2. 运行 setup.exe 按照提示完成安装。</p>
                  <p>3. 登录 OpenClaw 账号即可开始使用。</p>
                </div>
              )}
              {activeTab === 'history' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-on-surface font-headline mb-4">版本记录</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 rounded-xl bg-surface-container-low">
                      <div>
                        <span className="font-bold">v2.1.0</span>
                        <span className="text-sm text-on-surface-variant ml-4">2024-01-15</span>
                      </div>
                      <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded">当前版本</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-xl bg-surface-container-low">
                      <div>
                        <span className="font-bold text-on-surface-variant">v2.0.5</span>
                        <span className="text-sm text-on-surface-variant ml-4">2023-12-20</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

