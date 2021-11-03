import React, {ReactNode} from 'react';
import {Link} from 'gatsby';
import {AnchorLink} from 'gatsby-plugin-anchor-links';
// import AnimatedLink from '@app/components/AnimatedLink';
import AnimatedUnderline from '@app/components/AnimatedUnderline';

type MenuItemsProps = {
  href: string,
  anchorLink: boolean,
  animatedLink?: boolean,
  className?: string,
  children: ReactNode,
} & React.HTMLAttributes<HTMLSpanElement>

const MenuItem = ({
  href = '/',
  animatedLink = false,
  anchorLink = false,
  className = '',
  children,
  ...rest
}: MenuItemsProps) => {
  const RawLink = animatedLink ?
    <AnimatedUnderline className={className} {...rest}>
      {children}
    </AnimatedUnderline> :
    <span className={`text-primary ${className}`} {...rest}>
      {children}
    </span>;

  return (
    <>
      {anchorLink ?
      (<AnchorLink to={href}>{RawLink}</AnchorLink>) :
      (<Link to={href}>{RawLink}</Link>)
      }
    </>
  );
};

export default MenuItem;
