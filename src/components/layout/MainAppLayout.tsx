import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the MainAppLayout component.
 */
interface MainAppLayoutProps {
  /**
   * The content to be rendered inside the layout.
   * This is a mandatory prop.
   */
  children: React.ReactNode;
  /**
   * Optional additional CSS classes to apply to the main layout container.
   */
  className?: string;
}

/**
 * A top-level layout component that centers its content on the page.
 * It creates a full-height flex container to vertically and horizontally align its children.
 * This is ideal for pages like login, signup, or 404 pages.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen w-full items-center justify-center bg-background p-4',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
