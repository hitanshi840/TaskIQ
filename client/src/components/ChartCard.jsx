// src/components/ChartCard.jsx
import { ResponsiveContainer } from "recharts";

export default function ChartCard({ title, children }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">{title}</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
