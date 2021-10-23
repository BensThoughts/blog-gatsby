import React, {MouseEventHandler, ReactNode} from 'react';
import {Link} from 'gatsby';
import AnimatedLink from '@app/components/AnimatedLink';

type MenuItemsProps = {
  href: string,
  animatedLink?: boolean,
  className?: string,
  onClick?: MouseEventHandler<HTMLAnchorElement>
  children: ReactNode,
  key: string,
}

const MenuItem = ({
  href = '/',
  animatedLink = false,
  className = '',
  onClick,
  children,
  ...rest
}: MenuItemsProps) => {
  return (
    <Link to={href}>
      {animatedLink ?
        <AnimatedLink href={href} className={className}>
          {children}
        </AnimatedLink> :
        <a href={href} onClick={onClick} className={`text-primary ${className}`}>
          {children}
        </a>
      }
    </Link>
  );
};

export default MenuItem;
