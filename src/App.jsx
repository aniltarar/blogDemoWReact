import "./App.css";
import Header from "./components/Layout/Header/Header";
import BlogList from "./components/BlogList/BlogList";
import Wrapper from "./components/UI/Wrapper";

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <BlogList />
      </Wrapper>
    </>
  );
}

export default App;
