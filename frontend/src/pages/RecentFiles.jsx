import { useState } from "react";
import RecentCard from "../components/RecentCard.jsx";

const recentFiles = [
    { name: "New Invoice.pdf", type: "pdf", size: "1.2MB" },
    { name: "TimeTracking.xlsx", type: "xlsx", size: "650KB" },
    { name: "Design sprint.docx", type: "docx", size: "1MB" },
    { name: "Aire_logo.svg", type: "svg", size: "400KB" },
    { name: "Background Music.mp3", type: "mp3", size: "3.5MB" },
    { name: "Background Music.mp3", type: "mp3", size: "3.5MB" },
    { name: "Background Music.mp3", type: "mp3", size: "3.5MB" },
    { name: "Background Music.mp3", type: "mp3", size: "3.5MB" },
    { name: "Background Music.mp3", type: "mp3", size: "3.5MB" },
    { name: "Background Music.mp3", type: "mp3", size: "3.5MB" },
];

const RecentFiles = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const toggleSelection = (fileName) => {
        setSelectedFiles((prev) =>
            prev.includes(fileName)
                ? prev.filter((name) => name !== fileName)
                : [...prev, fileName]
        );
    };

    return (
        <section className="p-6 bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Files</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
                {recentFiles.map((file, index) => (
                    <RecentCard
                        key={index}
                        file={file}
                        isSelected={selectedFiles.includes(file.name)}
                        toggleSelection={() => toggleSelection(file.name)}
                    />
                ))}
            </div>
        </section>
    );
};

export default RecentFiles;
