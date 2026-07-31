import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {X} from 'lucide-react';
import {Sidebar} from '@/components/Sidebar';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({open, onClose}: MobileDrawerProps) {
  const {pathname} = useLocation();

  useEffect(() => {
    if (open) {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', onKey);
        document.body.style.overflow = '';
      };
    }
  }, [open, onClose]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!open) return null;

  return (
    <>
      <div className="drawer-overlay" onClick={onClose} aria-hidden="true" />
      <div className="drawer" role="dialog" aria-modal="true" aria-label="Documentation navigation">
        <button type="button" className="drawer__close" onClick={onClose} aria-label="Close navigation">
          <X size={16} />
        </button>
        <div style={{marginTop: 8}}>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
