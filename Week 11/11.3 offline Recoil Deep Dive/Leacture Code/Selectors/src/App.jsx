import { useRecoilValue, RecoilRoot, useRecoilState, useSetRecoilState, atoms } from 'recoil';
import { jobsAtom, MesssageAtom, NetworkAtom, NotificationAtom } from './atom1';
import { useMemo } from 'react';


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
  const notificationCount = useRecoilValue
   // Selectors
  const finalTotal = useRecoilValue(finalTotalSelector);


  return (
    <>
      <button>Home</button>
      <button>My Network {networkNotificationCount >= 100 ? "99+" : networkNotificationCount}</button>
      <button>Jobs {jobsCount}</button>
      <button>Messaging {messageCount}</button>
      <button>Notification {notificationCount}</button>
      <button onClick={finalTotal}>Me</button>
    </>
  );
}


export default App;



//////////////////////////////////////USE MEMO////////////////////////////////////////////////////////////


// function App() {
//   return (
//     <RecoilRoot>
//       <MainApp />
//     </RecoilRoot>
//   );
// }

// function MainApp() {
//   const networkNotificationCount = useRecoilValue(NetworkAtom);
//   const jobsCount = useRecoilValue(jobsAtom);
//   const messageCount = useRecoilValue(MesssageAtom);
//   const notificationCount = useRecoilValue(NotificationAtom);


//   // useMemo
//   const  finalTotal =  useMemo(() => {
//     return useMenetworkNotificationCount + jobsCount + messageCount + notificationCount;
//   }, [useMenetworkNotificationCount, jobsCount, messageCount, notificationCount]);


//   return (
//     <>
//       <button>Home</button>
//       <button>My Network {networkNotificationCount >= 100 ? "99+" : networkNotificationCount}</button>
//       <button>Jobs {jobsCount}</button>
//       <button>Messaging {messageCount}</button>
//       <button>Notification {notificationCount}</button>
//       <button onClick={finalTotal}>Me</button>
//     </>
//   );
// }


















////////////////////////////////////////RAW WAY//////////////////////////////////////////////



// function MainApp() {
//   const networkNotificationCount = useRecoilValue(NetworkAtom);
//   const jobsCount = useRecoilValue(jobsAtom);
//   const messageCount = useRecoilValue(MesssageAtom);
//   const notificationCount = useRecoilValue(NotificationAtom);
//   const  finalTotal = networkNotificationCount + jobsCount + messageCount + notificationCount;


//   return (
//     <>
//       <button>Home</button>
//       <button>My Network {networkNotificationCount >= 100 ? "99+" : networkNotificationCount}</button>
//       <button>Jobs {jobsCount}</button>
//       <button>Messaging {messageCount}</button>
//       <button>Notification {notificationCount}</button>
//       <button onClick={finalTotal}>Me</button>
//     </>
//   );
// }
