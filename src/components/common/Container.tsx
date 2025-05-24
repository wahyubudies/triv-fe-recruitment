import type { ReactNode } from "react";

interface ContainerProps {
   children?: ReactNode;
   className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
   return (
      <div className={`container mx-auto px-4 ${className}`}>
         {children}
      </div>
   );
};

export default Container;;