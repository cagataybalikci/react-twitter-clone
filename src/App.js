import Container from './layout/Container';
import Sidebar from './layout/Sidebar';
import Feed from './layout/Feed';
import Widgets from './layout/Widgets';

function App() {
  return (
    <Container>
      <Sidebar />
      <Feed />
      <Widgets />
    </Container>
  );
}

export default App;
