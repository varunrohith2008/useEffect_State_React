import React from 'react';

const Navbar = ({ currentTask, setCurrentTask }) => {
    const tasks = [1, 2, 3, 4, 5, 6];

    return (
        <nav className="bg-white shadow-md p-4 mb-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600 mb-4 md:mb-0">Tasks for UseEffect</h1>
                <div className="flex flex-wrap gap-2 justify-center">
                    {tasks.map((task) => (
                        <button
                            key={task}
                            onClick={() => setCurrentTask(task)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${currentTask === task
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            Task {task}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
