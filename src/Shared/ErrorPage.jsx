/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img
        src="https://i.ibb.co/HPYQfTS/pngegg-5.png"
        alt="404 Error"
        className="w-64 h-auto mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-800">Oops! Page Not Found</h1>
      <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
