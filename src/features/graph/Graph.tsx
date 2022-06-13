import Box from "@mui/material/Box";
import { FC } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useAppSelector } from "../../app/hooks";
import TemperatureCard from "../../components/TemperatureCard";
import { selectGraph } from "./graphSlice";

const DEFAULT_WIDTH = 730;
const XAXIS_INTERVAL = 9

const Graph: FC = () => {
  const { data } = useAppSelector(selectGraph);
  const latestInput = data[data.length - 1];

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        my={3}
      >
        <TemperatureCard id={1} temperature={latestInput?.firstTemperature} />
        <TemperatureCard id={2} temperature={latestInput?.secondTemperature} />
      </Box>

      <LineChart
        width={DEFAULT_WIDTH}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Legend iconType="square" verticalAlign="bottom" />
        <Tooltip />
        <XAxis interval={XAXIS_INTERVAL} />
        <YAxis />
        <Line type="monotone" dataKey="firstData" stroke="red" />
        <Line type="monotone" dataKey="secondData" stroke="blue" />
      </LineChart>
    </>
  );
};

export default Graph;
