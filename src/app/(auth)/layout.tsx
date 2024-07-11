type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="w-full h-[100dvh] flex items-center justify-between">
      {children}
    </main>
  );
}
