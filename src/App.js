import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-center text-3xl font-extrabold text-gray-900">
          User Information Form
        </h1>
        <UserForm />
      </div>
    </div>
  );
}

export default App;
