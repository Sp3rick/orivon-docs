import {useState} from 'react';
import type {ReactNode} from 'react';
import {Navbar} from '@/components/Navbar';
import {Footer} from '@/components/Footer';
import {MobileDrawer} from '@/components/MobileDrawer';
import {SearchDialog} from '@/components/SearchDialog';

interface LayoutProps {
  children: ReactNode;
  /** When true, a docs sidebar drawer is available on mobile. */
  docs?: boolean;
}

export function Layout({children, docs = false}: LayoutProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSidebar={docs ? () => setDrawerOpen(true) : undefined} showMenu={docs} />
      {docs && <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />}
      <main className="layout-main">{children}</main>
      {!docs && <Footer />}
      <SearchDialog />
    </>
  );
}
