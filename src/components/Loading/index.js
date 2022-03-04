import React from "react";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
        <div
          className="border border-blue-300 shadow rounded-md max-w-sm w-full mx-auto"
          key={index}
        >
          <div className="animate-pulse flex flex-col">
            <div className="rounded bg-slate-700 h-48 w-full"></div>
            <div className="flex flex-col space-y-2 p-2">
              <div className="h-5 bg-slate-700 rounded"></div>
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
