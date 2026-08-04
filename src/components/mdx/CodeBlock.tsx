import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {Highlight} from 'prism-react-renderer';
import {cssDrivenTheme} from './prism-theme';

interface CodeBlockProps {
  children: string;
  className?: string;
  title?: string;
}

export function CodeBlock({children, className, title}: CodeBlockProps) {
  const match = /language-([\w-]+)/.exec(className ?? '');
  const language = match ? match[1] : 'plaintext';
  const code = String(children).replace(/\n$/, '');
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="code-block">
      <div className="code-block__header">
        <span className="code-block__label">
          {title && <span className="code-block__filename">{title}</span>}
          <span className="code-block__lang">{language}</span>
        </span>
        <button type="button" className="code-block__copy" onClick={copy}>
          {copied ? <Check size={13} strokeWidth={2} /> : <Copy size={13} strokeWidth={1.8} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <Highlight code={code} language={language} theme={cssDrivenTheme}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <pre className={`code-block__pre ${className}`} style={style} tabIndex={0}>
            <code>
              {tokens.map((line, index) => (
                <span key={index} {...getLineProps({line})}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({token})} />
                  ))}
                  {index < tokens.length - 1 ? '\n' : ''}
                </span>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
}
