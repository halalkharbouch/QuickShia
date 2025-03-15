import { Search } from 'lucide-react';

const Topbar = () => {
    return (
        <header className="w-full bg-white shadow-sm border-b px-6 py-3 flex items-center">
            <div className="flex items-center w-full max-w-md">
                <Search className="text-gray-500 mr-2" size={20} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-gray-100 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                />
            </div>
        </header>
    );
};

export default Topbar;
