import { FileText, Image, FileSpreadsheet, FileMusic, FileVideo } from "lucide-react";

const fileIcons = {
    pdf: <FileText size={32} className="text-red-500" />,
    xlsx: <FileSpreadsheet size={32} className="text-green-500" />,
    docx: <FileText size={32} className="text-blue-500" />,
    svg: <Image size={32} className="text-purple-500" />,
    mp3: <FileMusic size={32} className="text-yellow-500" />,
    mp4: <FileVideo size={32} className="text-indigo-500" />,
};

const RecentCard = ({ file, isSelected, toggleSelection }) => {
    return (
        <div
            className={`relative flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-40 h-44 transition-all
                ${isSelected ? "border-2 border-blue-500 bg-blue-100" : "border border-gray-300"}
                hover:border-blue-500 hover:shadow-lg`
            }
        >
            {/* Checkbox for selecting file */}
            <input
                type="checkbox"
                checked={isSelected}
                onChange={toggleSelection}
                className="absolute top-2 right-2 w-4 h-4 accent-blue-500 cursor-pointer"
            />

            {/* File Icon */}
            <div className="w-12 h-12 flex justify-center items-center bg-gray-100 rounded-lg">
                {fileIcons[file.type] || <FileText size={32} className="text-gray-500" />}
            </div>

            {/* File Name */}
            <span className="mt-3 text-sm font-medium text-gray-800 text-center">
                {file.name}
            </span>

            {/* File Size */}
            <span className="text-xs text-gray-500">{file.size}</span>
        </div>
    );
};

export default RecentCard;
