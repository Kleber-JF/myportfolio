import styled from 'styled-components'

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Card = styled.div`
  border: 4px double white;
  border-radius: 8px;
  padding: 16px 0;

  h3 {
    text-align: center;
    margin-bottom: 8px;
  }

  ul {
    width: 320px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;

    :nth-child(1) {
      font-size: 24px;
    }
  }

  span {
    font-size: 20px;
    margin-right: 8px;
  }
`
