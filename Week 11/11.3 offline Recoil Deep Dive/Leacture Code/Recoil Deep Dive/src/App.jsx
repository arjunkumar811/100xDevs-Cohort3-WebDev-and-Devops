import { useRecoilValue, RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
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
const messagingAtonCount = useRecoilValue(MesssageAtom);
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


function ButtonUpdater() {
  const setMessageAtomCount = useSetRecoilState(MesssageAtom);
  return <button onClick={() => {
    setMessageAtomCount(c => 1);
  }}>
ME
  </button>
}


export default App;
