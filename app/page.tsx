import React from 'react';

export default function VehicleTracker() {
  const vehicles = [
    {
      number: 'KA05AQ5840',
      url: 'https://track.cautio.xyz/en?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZWhpY2xlX2lkIjoidmNpb24wMmpucnI0bnJ6ZXJoamVzaGc0Iiwib3JnYW5pc2F0aW9uX2lkIjoiZmJ0bTVmemZiZm43YWpiM3k2OHpmd3RkIiwiYWN0aXZlX2Zyb20iOiIwMDowMCIsImFjdGl2ZV90byI6IjIzOjMwIiwiaWF0IjoxNzY0ODI0NjgwLCJleHAiOjE3OTYzNjA2ODB9.gUtLeyEOxUzeQs5xeD9KkrOQW3ZUG3b_lNap-LF-CcI'
    },
    {
      number: 'KA05AQ5841',
      url: 'https://track.cautio.xyz/en?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZWhpY2xlX2lkIjoibnJ3cjRwcGtyNnRjenpjYnhpdTY2aXJlIiwib3JnYW5pc2F0aW9uX2lkIjoiZmJ0bTVmemZiZm43YWpiM3k2OHpmd3RkIiwiYWN0aXZlX2Zyb20iOiIwMDowMCIsImFjdGl2ZV90byI6IjIzOjMwIiwiaWF0IjoxNzY0ODI0NzU5LCJleHAiOjE3OTYzNjA3NTl9.1PN7wuAxIoNEbd9N2SCoTMQMIXGPXJBGYeEGcaEpj9M'
    },
    {
      number: 'KA51AG2500',
      url: 'https://track.cautio.xyz/en?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZWhpY2xlX2lkIjoia2Y5eW5qOGk3ZDR3cTJ3YzJkOHFybnk1Iiwib3JnYW5pc2F0aW9uX2lkIjoiZmJ0bTVmemZiZm43YWpiM3k2OHpmd3RkIiwiYWN0aXZlX2Zyb20iOiIwMDowMCIsImFjdGl2ZV90byI6IjIzOjMwIiwiaWF0IjoxNzY0ODI0ODM4LCJleHAiOjE3OTYzNjA4Mzh9.JCZWj-5OuUhX6ACr8hrCizCdmr6ruibrooYHxptN36s'
    },
    {
      number: 'KA30A3415',
      url: 'https://track.cautio.xyz/en?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZWhpY2xlX2lkIjoiY2UzbW8ydjR0ZnMzdzdyN2Z0bXZqY3oxIiwib3JnYW5pc2F0aW9uX2lkIjoiZmJ0bTVmemZiZm43YWpiM3k2OHpmd3RkIiwiYWN0aXZlX2Zyb20iOiIwMDowMCIsImFjdGl2ZV90byI6IjIzOjMwIiwiaWF0IjoxNzY0ODI0ODgxLCJleHAiOjE3OTYzNjA4ODF9.l8b0Ev5gy7ccnFnPvyiq-oFwmY885SyIBwGT6iGa1j8'
    },
    {
      number: 'KA51AG2504',
      url: 'https://track.cautio.xyz/en?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZWhpY2xlX2lkIjoicWFxbjE2OG1lZXNid2MzbzE4eHo0bWU0Iiwib3JnYW5pc2F0aW9uX2lkIjoiZmJ0bTVmemZiZm43YWpiM3k2OHpmd3RkIiwiYWN0aXZlX2Zyb20iOiIwMDowMCIsImFjdGl2ZV90byI6IjIzOjMwIiwiaWF0IjoxNzY0ODI0OTQzLCJleHAiOjE3OTYzNjA5NDN9.KNtgjxrAV46hId-T_c3HlBnzIujzwRFYwE38s_2bElQ'
    },
    {
      number: 'KA06AC3047',
      url: 'https://track.cautio.xyz/en?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZWhpY2xlX2lkIjoiZjgxcjlxbTlvb2p4ZzdvaHhzcWEzcHZmIiwib3JnYW5pc2F0aW9uX2lkIjoiZmJ0bTVmemZiZm43YWpiM3k2OHpmd3RkIiwiYWN0aXZlX2Zyb20iOiIwMDowMCIsImFjdGl2ZV90byI6IjIzOjMwIiwiaWF0IjoxNzY0ODI1MDA0LCJleHAiOjE3OTYzNjEwMDR9.XIkhMkuJ__QRBXnwCR1VVLAjyq388enYjFHHPG1E9TY'
    },
    {
      number: 'KA18C7787',
      url: 'https://track.cautio.xyz/en?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZWhpY2xlX2lkIjoiYmsxZDhnYmp5MjA5Ym4wcWc5MmZ5eGI2Iiwib3JnYW5pc2F0aW9uX2lkIjoiZmJ0bTVmemZiZm43YWpiM3k2OHpmd3RkIiwiYWN0aXZlX2Zyb20iOiIwMDowMCIsImFjdGl2ZV90byI6IjIzOjMwIiwiaWF0IjoxNzY0ODI1MDU0LCJleHAiOjE3OTYzNjEwNTR9.cegCS8uX2Y2ZlVLGMTUx5geV_3GUDK3l5fd_gVuMW7k'
    },
    {
      number: 'MH12WX8766',
      url: 'https://track.cautio.xyz/en?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZWhpY2xlX2lkIjoicG9uZGtnemRmaDV2NHBkZXA4M21ucXF3Iiwib3JnYW5pc2F0aW9uX2lkIjoiZmJ0bTVmemZiZm43YWpiM3k2OHpmd3RkIiwiYWN0aXZlX2Zyb20iOiIwMDowMCIsImFjdGl2ZV90byI6IjIzOjMwIiwiaWF0IjoxNzY0ODI1MTM5LCJleHAiOjE3OTYzNjExMzl9.GvGaU4hGFdJbECRX_aoCGbykkJFSq3ROvVnFlbx4rR0'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Vehicle Tracking System</h1>
          <p className="text-gray-600">Click on any vehicle number to track its location</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle, index) => (
            
              key={index}
              href={vehicle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
                <div className="flex items-center justify-between">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-full p-2">
                    <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{vehicle.number}</h2>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Track Live Location</span>
                </div>
              </div>
              
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Active: 00:00 - 23:30</span>
                  <div className="flex items-center text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="font-medium">Online</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-lg p-3 mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">How to use</h3>
              <p className="text-gray-600">Click on any vehicle card to open the live tracking page in a new tab. All vehicles are actively monitored during their operational hours.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
