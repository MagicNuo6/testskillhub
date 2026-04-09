import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full mt-20 bg-surface-container-low border-t border-outline-variant/15 py-12 px-8 flex flex-col items-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
        <Link to="/" className="text-lg font-bold text-on-surface font-headline">
          OpenClaw Skills
        </Link>
        <div className="flex gap-8">
          <a href="#" className="text-[0.75rem] text-on-surface/50 hover:text-primary transition-colors font-body">关于我们</a>
          <a href="#" className="text-[0.75rem] text-on-surface/50 hover:text-primary transition-colors font-body">使用条款</a>
          <a href="#" className="text-[0.75rem] text-on-surface/50 hover:text-primary transition-colors font-body">隐私政策</a>
          <a href="#" className="text-[0.75rem] text-on-surface/50 hover:text-primary transition-colors font-body">联系支持</a>
        </div>
      </div>
      <p className="text-[0.75rem] text-on-surface/50 font-body">
        © 2024 OpenClaw Skills. The Lucid Curator Experience.
      </p>
    </footer>
  );
}
