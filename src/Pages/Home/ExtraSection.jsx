/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const ExtraSection = () => {
    return (
        <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Fitness Tips for Beginners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Start Slow and Gradually Increase Intensity</h3>
              <p className="text-gray-600 mb-4">
                If you're new to fitness, it's important to start slow and gradually increase the intensity of your workouts. This helps prevent injuries and allows your body to adapt to the new physical demands.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Focus on Form and Technique</h3>
              <p className="text-gray-600 mb-4">
                Proper form and technique are essential for getting the most out of your exercises and minimizing the risk of injury. Take the time to learn the correct form for each exercise and practice it consistently.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Listen to Your Body</h3>
              <p className="text-gray-600 mb-4">
                Pay attention to your body's signals and adjust your workouts accordingly. If something feels painful or uncomfortable, take a break or modify the exercise. Rest and recovery are just as important as the workouts themselves.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Stay Consistent</h3>
              <p className="text-gray-600 mb-4">
                Consistency is key when it comes to fitness. Set realistic goals and establish a regular workout routine. Even if you can only dedicate a few minutes each day, it's better than doing nothing. Small, consistent efforts lead to big results over time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Mix Up Your Workouts</h3>
              <p className="text-gray-600 mb-4">
                Avoid getting stuck in a workout rut by incorporating variety into your routine. Try different types of exercises, such as cardio, strength training, and flexibility workouts. Not only does it keep things interesting, but it also challenges your body in new ways.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Stay Hydrated and Eat Well</h3>
              <p className="text-gray-600 mb-4">
                Proper nutrition and hydration are essential for supporting your fitness journey. Drink plenty of water throughout the day and fuel your body with balanced meals and snacks that provide the necessary nutrients for energy and recovery.
              </p>
            </div>
          </div>
        </div>
      </section>
  
    );
};

export default ExtraSection;