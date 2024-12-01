import { cn } from '@/lib/utils';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function Link({ href, className, children, ...props }: LinkProps) {
  return (
    <RouterLink
      to={href}
      className={cn(
        'transition-colors hover:text-foreground/80',
        className
      )}
      {...props}
    >
      {children}
    </RouterLink>
  );
}