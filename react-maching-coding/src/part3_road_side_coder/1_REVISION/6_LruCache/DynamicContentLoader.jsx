import React, { useState } from 'react';
import useLruCache from './useLruCache';
import { current } from '@reduxjs/toolkit';

const tabs = [
  {
    id: 1,
    content: 'tab 1 content',
    title: 'Tab 1',
  },
  {
    id: 2,
    content: 'tab 2 content',
    title: 'Tab 2',
  },
  {
    id: 3,
    content: 'tab 3 content',
    title: 'Tab 3',
  },
  {
    id: 4,
    content: 'tab 4 content',
    title: 'Tab 4',
  },
  {
    id: 5,
    content: 'tab 5 content',
    title: 'Tab 5',
  },
];
const DynamicContentLoader = () => {
  const [content, setContent] = useState([]);
  const { get, put } = useLruCache(3);

  async function loadContent(id) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const tab = tabs.find((tab) => tab.id === id);
    put(id, tab.content);
    setContent((content) => [...content, tab]);
  }

  function handleTabChange(id) {
    if (get(id)) {
      const content = get(id);
      setContent((prev) => [...prev, { id, content }]);
      console.log('cached value');
    } else {
      loadContent(id);
      console.log('data fetched');
    }
  }

  return (
    <div className="dynamic__tabs p-8">
      <div className="dynamic__tabs-title">
        <ul className="flex gap-4 justify-center">
          {tabs.map((tab, i) => (
            <li
              key={`${tab.id}${i}`}
              onClick={() => handleTabChange(tab.id)}
              className="cursor-pointer bg-green-600 text-white p-2"
            >
              {tab.title}
            </li>
          ))}
        </ul>
      </div>
      <ul className="tab__content">
        {content.map((tab, i) => (
          <li key={`${tab.id}${i}`}>{tab.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicContentLoader;
