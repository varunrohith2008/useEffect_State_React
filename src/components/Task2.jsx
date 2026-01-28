import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Task2 = () => {
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const num = Number(number);
        if (num >= 50 && num <= 150 && num % 5 === 0) {
            toast.success('Valid Number');
        } else {
            toast.error('Invalid Number');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Task 2: Range-Based Validation</h2>
            <p className="mb-6 text-gray-600">Enter a number. Checks if it's between 50-150 and a multiple of 5.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Number Input</label>
                    <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        placeholder="Enter a number"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Validate
                </button>
            </form>
        </div>
    );
};

export default Task2;
