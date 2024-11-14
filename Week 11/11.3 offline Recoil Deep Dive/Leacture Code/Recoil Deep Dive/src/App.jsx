import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil';
import { jobsAtom, MesssageAtom, NetworkAtom, NotificationAtom } from './atom';

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(NetworkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messageCount = useRecoilValue(MesssageAtom);
  const notificationCount = useRecoilValue(NotificationAtom);
  const  [message, setMessage] = useRecoilState(MesssageAtom);

  return (
    <>
      <button>Home</button>
      <button>My Network {networkNotificationCount >= 100 ? "99+" : networkNotificationCount}</button>
      <button>Jobs {jobsCount}</button>
      <button>Messaging {messageCount}</button>
      <button>Notification {notificationCount}</button>
      <button onClick={() => setMessage(messageCount + 1)}>Me</button>
    </>
  );
}

export default App;
