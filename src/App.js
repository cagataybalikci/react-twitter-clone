import Container from './layout/Container';
import Sidebar from './layout/Sidebar';
import Feed from './layout/Feed';
import Timeline from './layout/Timeline';

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
