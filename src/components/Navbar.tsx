import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown, UserCircle, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="fixed top-0 w-full z-50 lucid-glass shadow-[0_12px_32px_-4px_rgba(27,28,28,0.06)] h-[72px] flex items-center">
      <nav className="flex justify-between items-center h-full px-8 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-xl font-bold tracking-tight text-on-surface font-headline">
            OpenClaw Skills
          </Link>
          <div className="hidden md:flex items-center gap-8 h-full">
            <Link 
              to="/hot" 
              className={`transition-colors font-medium ${location.pathname === '/hot' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface hover:text-primary'}`}
            >
              热榜
            </Link>
            <div className="relative h-full flex items-center group">
              <Link 
                to="/discovery" 
                className={`flex items-center gap-1 transition-colors font-medium ${location.pathname === '/discovery' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface hover:text-primary'}`}
              >
                技能大全
                <ChevronDown className="w-4 h-4" />
              </Link>
              
              {/* Dropdown */}
              <div className="absolute top-[72px] left-0 w-56 bg-surface-container-lowest shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl p-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 flex flex-col gap-1 border border-outline-variant/10">
                <Link to="/discovery?role=teacher" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 text-on-surface hover:text-primary font-bold transition-all group/item">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                    <UserCircle className="w-5 h-5" />
                  </div>
                  教师技能大全
                </Link>
                <Link to="/discovery?role=student" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary/10 text-on-surface hover:text-secondary font-bold transition-all group/item">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover/item:bg-secondary group-hover/item:text-white transition-colors">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  学生技能大全
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="p-2 hover:bg-surface-container-low rounded-lg transition-all md:hidden">
            <Search className="w-5 h-5" />
          </button>
          <motion.button 
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-2 bg-gradient-to-br from-primary to-primary-container text-white rounded-full font-semibold shadow-lg shadow-primary/20 transition-all duration-200"
          >
            登录
          </motion.button>
        </div>
      </nav>
    </header>
  );
}
