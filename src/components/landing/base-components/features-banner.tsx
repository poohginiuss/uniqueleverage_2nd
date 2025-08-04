import React from "react";

const features = [
  {
    name: "AI Chat",
    icon: "https://cdn.prod.website-files.com/663483dda70a3610b4750664/682fe81188fd29ebf0b62f6e_Frame%20481812.svg",
  },
  {
    name: "Ads Manager",
    icon: "https://cdn.prod.website-files.com/663483dda70a3610b4750664/6887d8fbcd875e0e2cb1b890_layout-alt-01%20(2).svg",
  },
  {
    name: "Attribution",
    icon: "https://cdn.prod.website-files.com/663483dda70a3610b4750664/6887d9087cf1de95c4f0d051_dataflow-03%20(2).svg",
  },
  {
    name: "Analytics",
    icon: "https://cdn.prod.website-files.com/663483dda70a3610b4750664/6887d91908f26a20fa6e5e8f_bar-chart-08%20(4).svg",
  },
  {
    name: "Conversion Sync",
    icon: "https://cdn.prod.website-files.com/663483dda70a3610b4750664/6887d93421b5b6d5360456a3_refresh-ccw-02%20(2).svg",
  },
  {
    name: "Server-side Tracking",
    icon: "https://cdn.prod.website-files.com/663483dda70a3610b4750664/688bd8e386c719e6f33a73ba_server-04%20(3).svg",
  },
];

export const FeaturesBanner = () => {
  return (
    <div className="hidden sm:flex flex-wrap justify-center items-center gap-9 pt-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center gap-1 px-4 py-2 rounded-md shadow-sm"
        >
          <img
            loading="lazy"
            src={feature.icon}
            alt={feature.name}
            className="h-5.5 w-5.5 object-contain mb"
          />
          <p className="text-sm text-center font-medium text-white">{feature.name}</p>
        </div>
      ))}
    </div>
  );
};
