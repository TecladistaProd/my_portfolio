import styled from 'styled-components'

export const Container = styled.div`
  background-color: #0C0C0C;
  min-height: 100vh;
  padding: 1.5rem 2.7rem;
  @media screen and (max-width: 900px) {
    padding: .1rem .2rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  // justify-content: space-between;
`