import ReactMarkdown, { defaultUrlTransform } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { IoCheckmarkSharp } from 'react-icons/io5';

export const MarkdownRenderer: React.FC<{
  children: string;
  className?: string;
  blogMode?: boolean;
}> = ({ children, className, blogMode }) => {
  return (
    <ReactMarkdown
      className={className}
      remarkPlugins={[remarkGfm]}
      urlTransform={(url) =>
        url.startsWith('tel:') ? url : defaultUrlTransform(url)
      }
      components={{
        h1: ({ children, ...props }) => (
          <h1 className="font-heading" {...props}>
            {children}
          </h1>
        ),
        h2: ({ children, ...props }) => (
          <h2 className="font-heading" {...props}>
            {children}
          </h2>
        ),
        h3: ({ children, ...props }) => (
          <h3 className="font-heading" {...props}>
            {children}
          </h3>
        ),
        h4: ({ children, ...props }) => (
          <h4 className="font-heading" {...props}>
            {children}
          </h4>
        ),
        h5: ({ children, ...props }) => (
          <h5 className="font-heading" {...props}>
            {children}
          </h5>
        ),
        h6: ({ children, ...props }) => (
          <h6 className="font-heading" {...props}>
            {children}
          </h6>
        ),
        ul: ({ children, ...props }) => (
          <ul className="flex flex-wrap gap-x-10" {...props}>
            {children}
          </ul>
        ),
        li: ({ children, ...props }) => {
          if (blogMode) {
            return <li {...props}>{children}</li>;
          }
          return (
            <li
              className="relative list-none grow basis-full md:basis-5/12 min-w-fit"
              {...props}
            >
              <IoCheckmarkSharp
                className="absolute -left-6 -top-5 text-primary-500"
                size={25}
              />
              {children}
            </li>
          );
        },
        del: ({ children, ...props }) => (
          <del className="text-neutral-300" {...props}>
            {children}
          </del>
        ),
        a: ({ children, href, ...props }) => (
          <a
            href={href}
            target={href && href.startsWith('tel:') ? undefined : '_blank'}
            rel={
              href && href.startsWith('tel:')
                ? undefined
                : 'noopener noreferrer'
            }
            className="underline underline-offset-4 decoration-primary-500 transition transform hover:decoration-primary-200"
            {...props}
          >
            {children}
          </a>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
