import Head from "next/head";
import React from "react";
import MainHeader from "./MainHeader";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <MainHeader />

      {children}
    </div>
  );
}
