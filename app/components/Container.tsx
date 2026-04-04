// app/components/Container.tsx
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A reusable responsive container for consistent scaling and spacing.
 * Usage: <Container>...</Container>
 */
const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-4xl mx-auto px-4 sm:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
