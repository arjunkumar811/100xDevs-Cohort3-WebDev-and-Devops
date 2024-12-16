import { useEffect, useRef, useState } from "react"


function App() {
 const [socket, setSocket] = useState();
 const inputRef = useRef();


function sentMessage () {
  if(!socket) {
    return;
  }
  
  const message = inputRef.current.value;
 //@ts-ignore
socket.send(message);
}

useEffect (() => {
  const ws = new WebSocket("ws://localhost:8080");
setSocket(ws);

   ws.onmessage = (e) => {
    alert(e.data);
   }
}, []);

  return (
    <>
      <input ref={inputRef} type="text" placeholder="sent a ping" />
      <button onClick={sentMessage}>send</button>
    </>
  )
}

export default App
