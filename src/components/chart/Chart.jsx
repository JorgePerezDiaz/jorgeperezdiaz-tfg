import { Container, ChartTitle } from "./ChartStyles";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function Chart({ data, dataKey, grid }) {
  return (
    <Container>
      <ChartTitle>Analiticas de usuarios</ChartTitle>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="white" />
          {grid && <CartesianGrid stroke="rgb(45, 51, 89)" />}
          <Line type="monotone" dataKey={dataKey} stroke="white" />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default Chart;
