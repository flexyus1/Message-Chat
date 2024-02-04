import React, {useRef, useState, useEffect} from "react"

export default function Chat({socket}){

const messageRef = useRef()
const [messageList, setMessageList] = useState([])

useEffect(()=>{
  socket.on('receive_message', data => {
    setMessageList((current) => [...current, data])
    console.log(useEffect)
  })

  return () => socket.off('receive_message')
}, [socket])

const handleSubmit = () => {
  const message = messageRef.current.value
  if(!message.trim()) return

  socket.emit('message', message)
  clearInput()
  console.log(handleSubmit)
}

  const clearInput = () => {
    messageRef.current.value = ''
  }

  return(
    <div>
      <h1>Message Box</h1>
      {
        messageList.map((message, index) => (
          <p key={index}>{message.author}: {message.text}</p>
        ))
        }
      <input type="text" placeholder="Message" ref={messageRef} />
      <button onClick={handleSubmit}>Send</button>
    </div>

  )
}