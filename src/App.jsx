import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';

function App() {
  const [currentTask, setCurrentTask] = useState(1);

  const renderTask = () => {
    switch (currentTask) {
      case 1: return <Task1 />;
      case 2: return <Task2 />;
      case 3: return <Task3 />;
      case 4: return <Task4 />;
      case 5: return <Task5 />;
      case 6: return <Task6 />;
      default: return <Task1 />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentTask={currentTask} setCurrentTask={setCurrentTask} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          {renderTask()}
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
