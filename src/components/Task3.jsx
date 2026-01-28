import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Task3 = () => {
    const [inputValue, setInputValue] = useState('');
    const [count, setCount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (count >= 3) {
            toast.error('Limit Reached');
            return;
        }

        setCount(count + 1);
        toast.info(`Submission ${count + 1} accepted`);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Task 3: Attempt-Limited Submit</h2>
            <p className="mb-6 text-gray-600">You can submit this form only 3 times.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Input Field</label>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        disabled={count >= 3}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100 disabled:text-gray-500"
                        placeholder="Type something..."
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={count >= 3}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${count >= 3 ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
                        }`}
                >
                    {count >= 3 ? 'Limit Reached' : 'Submit'}
                </button>
                <p className="text-sm text-gray-500 text-center">Attempts: {count} / 3</p>
            </form>
        </div>
    );
};

export default Task3;
