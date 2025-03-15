import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import RecentFiles from "./pages/RecentFiles";

function App() {
    return (
        <Router>
            <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Topbar />
                    <main className="p-6">
                        <Routes>
                            <Route path="/recent" element={<RecentFiles />} />
                            <Route path="/" element={<h1 className="text-xl font-bold">Welcome</h1>} />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}

export default App;
