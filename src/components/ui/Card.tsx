import { HTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';


interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}


const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', hover = true, children, ...props }, ref) => {
    const baseClasses = 'bg-white rounded-2xl shadow-xl overflow-hidden';
    const hoverClasses = hover ? 'hover:shadow-2xl transition-all duration-300' : '';


    return (
      <motion.div
        ref={ref}
        className={`${baseClasses} ${hoverClasses} ${className}`}
        whileHover={hover ? { y: -4 } : undefined}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);


Card.displayName = 'Card';


export default Card;

