import MobileNavbar from './components//ui/layout/MobileNavbar';
import Timer from './components/countdown/Timer';
import MainMenu from './components/ui/layout/MainMenu';
import styled from 'styled-components';

const Wrapper = styled.div`
  @media screen and (min-width: 900px) {
    .main {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <div className='main'>
        <MainMenu />
        <MobileNavbar />
        <Timer />
      </div>
    </Wrapper>
  );
}

export default App;
