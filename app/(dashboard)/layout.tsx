type Props = {
  children: React.ReactNode;
};

function dashboardLayout({ children }: Props) {
  return <div className="py-8">{children}</div>;
}

export default dashboardLayout;
