import {Link} from 'react-router-dom';
import {Search} from 'lucide-react';
import {useMemo, useState} from 'react';

export interface SpecRecord {
  id: string;
  title: string;
  category: string;
  status: 'Draft' | 'Accepted' | 'Deprecated' | 'Archived';
  version: string;
  updated: string;
  summary: string;
  route: string;
}

interface SpecRegistryProps {
  specs: SpecRecord[];
}

const statusBadgeClass: Record<SpecRecord['status'], string> = {
  Draft: 'badge badge--outline',
  Accepted: 'badge',
  Deprecated: 'badge badge--soon',
  Archived: 'badge badge--soon',
};

const controlStyle: React.CSSProperties = {
  padding: '8px 12px',
  borderRadius: 10,
  border: '1px solid var(--border)',
  background: 'var(--bg)',
  color: 'var(--text)',
  fontSize: 14,
  outline: 'none',
};

export function SpecRegistry({specs}: SpecRegistryProps) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<string>('All');
  const [category, setCategory] = useState<string>('All');

  const categories = useMemo(() => Array.from(new Set(specs.map((s) => s.category))).sort(), [specs]);
  const statuses = useMemo(() => Array.from(new Set(specs.map((s) => s.status))).sort(), [specs]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return specs.filter((s) => {
      if (status !== 'All' && s.status !== status) return false;
      if (category !== 'All' && s.category !== category) return false;
      if (!q) return true;
      return `${s.id} ${s.title} ${s.category} ${s.summary}`.toLowerCase().includes(q);
    });
  }, [specs, query, status, category]);

  return (
    <div className="spec-registry" style={{display: 'flex', flexDirection: 'column', gap: 16}}>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
        <div style={{position: 'relative', flex: '1 1 220px', minWidth: 200}}>
          <Search
            size={15}
            strokeWidth={1.8}
            aria-hidden="true"
            style={{position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-3)'}}
          />
          <input
            type="search"
            aria-label="Search specifications"
            placeholder="Search by identifier, title or summary"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            style={{...controlStyle, width: '100%', paddingLeft: 36}}
          />
        </div>
        <select
          aria-label="Filter by status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          style={{...controlStyle, minWidth: 140}}
        >
          <option value="All">All statuses</option>
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <select
          aria-label="Filter by category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          style={{...controlStyle, minWidth: 160}}
        >
          <option value="All">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div style={{fontSize: 13, color: 'var(--text-3)'}}>
        {filtered.length} of {specs.length} specifications
      </div>

      <div style={{overflowX: 'auto'}}>
        <table>
          <thead>
            <tr>
              <th>Identifier</th>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Version</th>
              <th>Last updated</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((spec) => (
              <tr key={spec.id}>
                <td>
                  <Link to={spec.route} style={{fontFamily: 'Geist Mono, monospace', fontSize: 13}}>
                    {spec.id}
                  </Link>
                </td>
                <td>
                  <Link to={spec.route} style={{fontWeight: 550}}>
                    {spec.title}
                  </Link>
                </td>
                <td>{spec.category}</td>
                <td>
                  <span className={statusBadgeClass[spec.status]}>{spec.status}</span>
                </td>
                <td style={{fontFamily: 'Geist Mono, monospace', fontSize: 13, whiteSpace: 'nowrap'}}>
                  {spec.version}
                </td>
                <td style={{whiteSpace: 'nowrap'}}>{spec.updated}</td>
                <td>{spec.summary}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} style={{color: 'var(--text-3)', textAlign: 'center', padding: 32}}>
                  No specifications match the current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
