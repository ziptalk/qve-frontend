import * as St from './style_dashboard';
import Footer from '../common/components/Footer';
import Header from '../common/components/Header';
import { announceIMG } from './assets/0_index';
import { Outlet } from 'react-router-dom';
import useModal from '../common/utils/useModal';
import BotModal from './components/BotModal';

const MainPage = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <St.MainContainer>
      <Header />
      <Announcement />
      <Dashboard />
      <Footer />
      <BotModal isOpen={isModalOpen} onClose={closeModal} />
    </St.MainContainer>
  );
};

const Announcement = () => {
  return (
    <St.Announcement.Container>
      <St.Announcement.Label>Announcement</St.Announcement.Label>
      <St.Announcement.Text>
        Unlock the Full Potential of Your
      </St.Announcement.Text>
      <St.Announcement.Text>Investments with QVE!</St.Announcement.Text>
      <St.Announcement.Background
        src={announceIMG}
      ></St.Announcement.Background>
    </St.Announcement.Container>
  );
};

const Dashboard = () => {
  return (
    <St.Dashboard.Container>
      <Outlet />
    </St.Dashboard.Container>
  );
};

export default MainPage;
