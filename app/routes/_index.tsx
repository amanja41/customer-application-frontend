import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <div className="container items-center w-full py-16 flex-col">
      <div className="bg-blue py-16 px-8  w-full rounded-lg">
        <Outlet />
      </div>
      <h2>sdsdsdsdsd</h2>
    </div>
  );
}
