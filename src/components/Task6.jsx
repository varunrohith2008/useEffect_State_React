import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Task6 = () => {
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const num = Number(number);
        if (num >= 10 && num <= 100 && num % 10 === 0) {
            toast.success('Good Number');
        } else {
            toast.error('Not a Good Number');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Task 6: Good Number Checker</h2>
            <p className="mb-6 text-gray-600">Enter a number. Checks if it's a multiple of 10 between 10 and 100.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Number Input</label>
                    <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter a number"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Check Number
                </button>
            </form>
        </div>
    );
};

export default Task6;
