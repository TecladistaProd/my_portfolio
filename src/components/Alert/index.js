import React, { createContext, useState, useCallback } from 'react';

import { Container } from './styles';

const ctx = createContext({
  /**
   * @function openAlert - function to open a custom alert
   * @param {Object} message - message object
   * @param {string} message.title - message title
   * @param {string} message.body - message text body
   * @param {number} [message.time] message.time - time in ms to close message
   */
  openAlert: (message = {}) => {}
})

function Alert({ children }) {
  /**
   * @namespace
   * @param {string} title - message title
   * @param {string} body - message text body
   * @param {number} [time] message.time - time in ms to close message
   */
  const [message, setMessage] = useState({
    title: '',
    body: ''
  })
  const [opened, setOpened] = useState(false)

  function openAlert(message) {
    setMessage({ title: message.title, body: message.body })
    setOpened(true)
    setTimeout(handleClose, message.time || 1000)
  }

  const handleClose = useCallback(() => {
    setMessage({title: '', body: ''})
    setOpened(false)
  }, [])

  return (
    <ctx.Provider value={
      {openAlert}
    }>
      <>
        {children}
        {
          opened && 
          <Container>
            <button onClick={handleClose}>X</button>
            <h3>{message.title}</h3>
            <p>{message.body}</p>
          </Container>
        }
      </>
    </ctx.Provider>
  );
}

export default Alert

export const context = ctx