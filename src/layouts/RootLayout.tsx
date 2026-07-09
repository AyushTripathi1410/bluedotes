import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './parts/Header';
import Footer from './parts/Footer';

export default function RootLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollRestoration />
      <Header />
      <main className="flex-1">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
}