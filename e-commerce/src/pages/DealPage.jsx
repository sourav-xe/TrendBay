import React from "react";
import { useParams } from "react-router-dom";
import Shop from "./Shop"; // ✅ reuse same Shop filters layout

export default function DealPage() {
  const { slug } = useParams();

  // Give each deal its own product dataset label
  const readableTitle = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return <Shop key={slug} customCategory={slug} title={readableTitle} />;
}
