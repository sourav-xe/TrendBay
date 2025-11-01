import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container py-16 text-center">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="text-gray-600 mt-2">We couldn’t find that page.</p>
      <Link to="/" className="btn btn-primary mt-6">Go Home</Link>
    </section>
  );
}
