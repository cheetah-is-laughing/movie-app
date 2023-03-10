import Row from "../../components/Row";
import requests from "../../api/requests";

const Home = () => {
  return (
    <section>
      <Row
        title="π¬λ°μ€μ€νΌμ€ μμ"
        id="popular"
        fetchUrl={requests.fetchPopular}
      />
      <Row
        title="πμΉνλλΉ μ€μκ° κΈμμΉ"
        id="trending"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="πκ°λ΄ μμ μ"
        id="upcoming"
        fetchUrl={requests.fetchUpcoming}
      />
      <Row
        title="π₯νκ·  λ³μ μ΄ λμ μν"
        id="top rated"
        fetchUrl={requests.fetchTopRated}
      />
    </section>
  );
};
export default Home;
