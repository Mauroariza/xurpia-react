import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

export const Layout = () => {
  return (
    <div className="flex bg-[#252527] h-screen">
      <SideBar />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};