import { Container, Item, Title, MoneyContainer } from "./FeaturedInfoStyles";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

function Home() {
  return (
    <Container>
      <Item>
        <Title>Ganancias</Title>
        <MoneyContainer>
          <span className="money">$2,145</span>
          <span className="rate">
            -11.4
            <ArrowDownward className="icon negative" />
          </span>
        </MoneyContainer>
        <span className="subtitle">Comparadas al ultimo mes</span>
      </Item>
      <Item>
        <Title>Ventas</Title>
        <MoneyContainer>
          <span className="money">$5,145</span>
          <span className="rate">
            -1.4
            <ArrowDownward className="icon negative" />
          </span>
        </MoneyContainer>
        <span className="subtitle">Comparadas al ultimo mes</span>
      </Item>
      <Item>
        <Title>Coste</Title>
        <MoneyContainer>
          <span className="money">$3,145</span>
          <span className="rate">
            +3.5
            <ArrowUpward className="icon" />
          </span>
        </MoneyContainer>
        <span className="subtitle">Comparadas al ultimo mes</span>
      </Item>
    </Container>
  );
}

export default Home;
