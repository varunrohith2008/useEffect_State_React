import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Task5 = () => {
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const num = Number(number);
        if (num % 3 === 0 && num % 5 === 0) {
            toast.success('Special Number');
            setNumber(''); // Reset input
        } else {
            toast.info('Normal Number');
            // Do not reset input
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Task 5: Conditional Reset Logic</h2>
            <p className="mb-6 text-gray-600">Enter a number. Checks if divisible by 3 and 5. Resets if true.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Number Input</label>
                    <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        placeholder="Enter a number"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                    Check Logic
                </button>
            </form>
        </div>
    );
};

export default Task5;
