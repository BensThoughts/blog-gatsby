import styled from '@emotion/styled';

const Header = styled.h1`
display: flex;
align-items: center;
height: 100%;
width: 100%;
z-index: -1;
position: relative;
white-space: nowrap;
font-family: monospace;
font-size: 1.5rem;
backdrop-filter: var(--app-backdrop-filter);

@media (min-width: 768px) {
  font-size: 2rem;
}

&::before {
  content: "";
  position: relative;
  top: 0px;
  width: 100%;
  height: 2px;
  margin-right: 20px;
  background-color: rgb(var(--color-app-secondary));
  z-index: -1;
  backdrop-filter: var(--app-backdrop-filter);
}

&::after {
  content: "";
  position: relative;
  top: 0px;
  width: 100%;
  height: 2px;
  margin-left: 20px;
  background-color: rgb(var(--color-app-secondary));
  z-index: -1;
  backdrop-filter: var(--app-backdrop-filter);

  /* @media (min-width: 768px) {
    width: 300px;
  } */
}
`;

export default function SectionTitleHeader({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex h-full items-center my-2 ${className}`} {...rest}>
      <Header>{children}</Header>
    </div>
  );
}
