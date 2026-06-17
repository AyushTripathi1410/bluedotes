import { Outlet } from 'react-router-dom';
import Header from './parts/Header';
import Footer from './parts/Footer';

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}