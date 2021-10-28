import React, {MouseEventHandler, ReactNode} from 'react';
import {Link} from 'gatsby';
// import AnimatedLink from '@app/components/AnimatedLink';
import AnimatedUnderline from '@app/components/AnimatedUnderline';

type MenuItemsProps = {
  href: string,
  animatedLink?: boolean,
  className?: string,
  children: ReactNode,
} & React.HTMLAttributes<HTMLSpanElement>

const MenuItem = ({
  href = '/',
  animatedLink = false,
  className = '',
  children,
  ...rest
}: MenuItemsProps) => {
  return (
    <Link to={href}>
      {animatedLink ?
        <AnimatedUnderline className={className} {...rest}>
          {children}
        </AnimatedUnderline> :
        <span className={`text-primary ${className}`} {...rest}>
          {children}
        </span>
      }
    </Link>
  );
};

export default MenuItem;
