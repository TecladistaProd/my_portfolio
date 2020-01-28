import React, { useCallback, useContext } from 'react';
// import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Alert, { context } from '../src/components/Alert'

export default {
  title: 'Alert Component',
  component: Alert,
};


function DispatchAlert () {
  const ctx = useContext(context)
  const handleClick = useCallback(() => {
    ctx.openAlert({
      title: 'Storybook',
      body: 'Hello World',
      time: 2500
    })
  }, [])
  return <Button onClick={handleClick}>Click Me</Button>
}

export const ContentInside = () => {
  return (
    <Alert>
      <h1>Alert Component working with context</h1>
      <DispatchAlert/>
    </Alert>
  )
}