import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Task4 = () => {
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const strNum = number.toString();
        if (strNum.startsWith('9') && strNum.length === 4) {
            toast.success('Accepted Number');
        } else {
            toast.error('Rejected Number');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Task 4: Pattern-Based Number Check</h2>
            <p className="mb-6 text-gray-600">Enter a number. Checks if it starts with 9 and has exactly 4 digits.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Number Input</label>
                    <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Enter a number"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                    Check Pattern
                </button>
            </form>
        </div>
    );
};

export default Task4;
