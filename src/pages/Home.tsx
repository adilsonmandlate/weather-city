import { Details, Sidebar } from "components";
import styled from "styled-components";

const Container = styled.main`
  margin: 0 auto;
  max-width: var(--layout-width);
  display: grid;
  grid-template-columns: 400px 1fr;
`;

const Home = () => {
  return (
    <Container>
      <Sidebar />
      <Details />
    </Container>
  );
};

export default Home;
