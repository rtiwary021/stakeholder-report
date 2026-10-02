import type { Metadata } from "next";
import "./globals.css";
import { meta as reportMeta } from "@/lib/data";

export const metadata: Metadata = {
  title: "Stakeholder Impact Report — Agentic Delivery Transformation",
  description: `Findings from ${reportMeta.stakeholders} completed stakeholder interviews on agentic delivery transformation.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
