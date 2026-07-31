import {Check} from 'lucide-react';
import type {ReactNode} from 'react';

export interface TimelinePhase {
  period: string;
  title: string;
  status?: 'done' | 'current' | 'future';
  children: ReactNode;
  checks?: {text: string; done?: boolean}[];
}

interface TimelineProps {
  phases: TimelinePhase[];
}

export function Timeline({phases}: TimelineProps) {
  return (
    <ol className="timeline">
      {phases.map((phase, index) => (
        <li key={index} className="timeline__item">
          <span
            className={`timeline__dot ${phase.status === 'done' ? '' : phase.status === 'current' ? 'timeline__dot--current' : 'timeline__dot--future'}`}
            aria-hidden="true"
          />
          <div className="timeline__meta">
            <span className="timeline__period">{phase.period}</span>
            {phase.status === 'done' && <span className="badge">Completed</span>}
            {phase.status === 'current' && <span className="badge">In progress</span>}
            {phase.status === 'future' && <span className="badge badge--soon">Planned</span>}
          </div>
          <h3 className="timeline__title">{phase.title}</h3>
          <div className="timeline__body">{phase.children}</div>
          {phase.checks && phase.checks.length > 0 && (
            <ul className="timeline__checks">
              {phase.checks.map((check, i) => (
                <li
                  key={i}
                  className={`timeline__check ${check.done === false ? 'timeline__check--pending' : ''}`}
                >
                  <span className="timeline__check-icon">
                    <Check size={15} strokeWidth={2} />
                  </span>
                  {check.text}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
