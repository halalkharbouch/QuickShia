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

const iconSize = 20;

const items = [
    { icon: <Clock size={iconSize} />, text: 'Recents', active: true },
    { icon: <Image size={iconSize} />, text: 'Photos' },
    { icon: <FileText size={iconSize} />, text: 'Documents' },
    { icon: <Video size={iconSize} />, text: 'Videos' },
    { icon: <Music size={iconSize} />, text: 'Music' },
    { icon: <Folder size={iconSize} />, text: 'Files' },
    { icon: <LifeBuoy size={iconSize} />, text: 'Support' }
];

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
                        src="https://img.logoipsum.com/243.svg"
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
                        {items.map((item, index) => (
                            <SidebarItem key={index} {...item} />
                        ))}
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

const SidebarItem = ({ icon, text, active }) => {
    const { expanded } = useContext(SidebarContext);
    return (
        <li
            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                active
                    ? 'bg-gradient-to-r from-indigo-200 to-indigo-100 text-indigo-800'
                    : 'hover:bg-indigo-50 text-gray-600'
            }`}
        >
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}>{text}</span>

            {!expanded && (
                <div
                    className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-xs transition-all invisible opacity-20 -translate-x-3 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0`}
                >
                    {' '}
                    {text}{' '}
                </div>
            )}
        </li>
    );
};

export default Sidebar;
