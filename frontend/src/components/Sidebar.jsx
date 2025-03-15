import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react';
import {
    LifeBuoy,
    Receipt,
    Boxes,
    Package,
    UserCircle,
    BarChart3,
    LayoutDashboard,
    Settings,
    FileText,
    Image,
    Video,
    Music,
    Folder,
    Clock
} from 'lucide-react';
import { createContext, useContext, useState } from 'react';
import Logo from '../../public/logo/quickshia-logo.png';
import { Link, useLocation } from 'react-router-dom';

const iconSize = 20;

const SidebarContext = createContext();

const Sidebar = () => {
    const [expanded, setExpanded] = useState(true);
    return (
        <aside className="h-screen">
            <nav
                className={`h-full flex flex-col bg-white border-r shadow-sm transition-all ${
                    expanded ? 'w-64' : 'w-16'
                }`}
            >
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img
                        src={Logo}
                        alt="QuickShia Logo"
                        className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`}
                    />
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                    >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3 ">
                        <SidebarItem to="/recent" icon={<Clock size={iconSize} />} text="Recents" />
                        <SidebarItem to="/photos" icon={<Image size={iconSize} />} text="Photos" />
                        <SidebarItem to="/documents" icon={<FileText size={iconSize} />} text="Documents" />
                        <SidebarItem to="/videos" icon={<Video size={iconSize} />} text="Videos" />
                        <SidebarItem to="/music" icon={<Music size={iconSize} />} text="Music" />
                        <SidebarItem to="/files" icon={<Folder size={iconSize} />} text="Files" />
                        <SidebarItem to="/support" icon={<LifeBuoy size={iconSize} />} text="Support" />
                    </ul>
                </SidebarContext.Provider>
                {expanded && (
                    <div className="p-3 w-full transition-all">
                        <div className="bg-gray-200 rounded-lg shadow-md w-full max-w-full p-4">
                            <h4 className="font-semibold text-gray-800 mb-2">Storage</h4>
                            <div className="relative w-full h-3 bg-gray-300 rounded-full overflow-hidden mb-2">
                                <div
                                    className="h-full bg-blue-500 transition-all duration-300"
                                    style={{ width: '60%' }}
                                />
                            </div>
                            <span className="text-xs text-gray-600">77.8GB / 128GB Used</span>
                        </div>
                    </div>
                )}
            </nav>
        </aside>
    );
};

const SidebarItem = ({ to, icon, text }) => {
    const { expanded } = useContext(SidebarContext);
    const location = useLocation();
    const active = location.pathname === to;

    return (
        <li
            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                active ? 'bg-indigo-200 text-indigo-800' : 'hover:bg-indigo-50 text-gray-600'
            }`}
        >
            <Link to={to} className="flex items-center w-full">
                {icon}
                <span className={`overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}>{text}</span>
            </Link>
        </li>
    );
};

export default Sidebar;
