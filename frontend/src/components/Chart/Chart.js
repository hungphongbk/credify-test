import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./Chart.module.css";

export default function Chart({ data }) {
  return (
    <div className={styles.Chart}>
      <ComposedChart width={536} height={203} data={data}>
        <defs>
          <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7a22a0" stopOpacity={0.22} />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="month"
          type={"category"}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#BDBDBD" }}
          interval={0}
        />
        <YAxis
          tickFormatter={(v) => "$" + v.toLocaleString()}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#BDBDBD" }}
        />
        <Line
          type="monotone"
          dataKey="userAcquisition"
          stroke="#bdbdbd"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="profit"
          stroke="#7a22a0"
          strokeWidth={2}
          dot={false}
        />
        <Area
          type={"monotone"}
          dataKey={"profit"}
          stroke={false}
          fillOpacity={1}
          fill={"url(#colorProfit)"}
        />
      </ComposedChart>
    </div>
  );
}
