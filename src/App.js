import Container from './components/Container';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';

function App() {
  return (
    <Container>
      <Sidebar />
      <Feed />
      <Timeline />
    </Container>
  );
}

export default App;
