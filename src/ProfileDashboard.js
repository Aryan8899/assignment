import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { PlusIcon, ChevronLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid';

const ProfileDashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [galleryImages, setGalleryImages] = useState([
    'https://via.placeholder.com/300x300',
    'https://via.placeholder.com/300x300',
    'https://via.placeholder.com/300x300',
  ]);

  const tabs = ['About Me', 'Experiences', 'Recommended'];

  const handleAddImage = () => {
    setGalleryImages([...galleryImages, 'https://via.placeholder.com/300x300']);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Empty left half */}
      <div className="hidden lg:block lg:w-1/2" />

      {/* Right half with widgets */}
      <div className="w-full lg:w-1/2 p-8 space-y-8">
        {/* About Me Widget */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
            <Tab.List className="flex space-x-1 rounded-xl bg-gray-700 p-1">
              {tabs.map((tab) => (
                <Tab
                  key={tab}
                  className={({ selected }) =>
                    `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white
                    ${selected ? 'bg-gray-900 shadow' : 'hover:bg-gray-800'}`
                  }
                >
                  {tab}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel className="rounded-xl bg-gray-800 p-3">
                <p className="text-sm text-gray-400">
                  Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
                  I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany & our 4-year-old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
                </p>
              </Tab.Panel>
              <Tab.Panel className="rounded-xl bg-gray-800 p-3">
                <p className="text-sm text-gray-400">Experiences content goes here.</p>
              </Tab.Panel>
              <Tab.Panel className="rounded-xl bg-gray-800 p-3">
                <p className="text-sm text-gray-400">Recommended content goes here.</p>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>

        {/* Gallery Widget */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Gallery</h2>
            <button
              onClick={handleAddImage}
              className="bg-gray-700 text-white py-2 px-4 rounded-full flex items-center"
            >
              <PlusIcon className="w-5 h-5 mr-2" />
              ADD IMAGE
            </button>
          </div>
          <div className="relative">
            <div className="flex space-x-4 overflow-x-auto">
              {galleryImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              ))}
            </div>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full">
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Question mark icon */}
      <QuestionMarkCircleIcon className="absolute top-4 right-4 w-6 h-6" />
    </div>
  );
};

export default ProfileDashboard;
