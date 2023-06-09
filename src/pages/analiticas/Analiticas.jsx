import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { Container } from "./AnaliticasStyles";
import { userData } from "../../data";

function Home() {
  return (
    <Container>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="activeusers"
      />
    </Container>
  );
}

export default Home;
