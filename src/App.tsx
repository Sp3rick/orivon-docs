import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {ThemeProvider} from '@/lib/theme';
import {SearchProvider} from '@/lib/search-context';
import {ScrollToTop} from '@/components/ScrollToTop';
import {Layout} from '@/components/Layout';
import Landing from '@/pages/Landing';
import DocPage from '@/pages/DocPage';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout><Landing /></Layout>} />
            <Route path="/docs" element={<Navigate to="/docs/introduction/home" replace />} />
            <Route path="/docs/:level/:id" element={<Layout docs><DocPage /></Layout>} />
            <Route path="/docs/:level/:id/*" element={<Layout docs><DocPage /></Layout>} />
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </ThemeProvider>
  );
}
