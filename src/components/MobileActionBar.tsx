"use client";

import Link from "next/link";
import { clinic } from "@/config/clinic";

export function MobileActionBar() {
  return (
    <nav className="mobile-bar">
      <a
        href={clinic.phones[0].tel}
        className="active"
        aria-label="Call Sahara Health Cluster"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 0 7h0c0 2.06.42 4.11 1.23 5.74" />
        </svg>
        <span>Call</span>
      </a>
      <a href="#location" aria-label="Get directions">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span>Directions</span>
      </a>
    </nav>
  );
}