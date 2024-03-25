import styled from 'styled-components'

export const ExperienceContainer = styled.div`
  padding: 8px;
  margin: 16px 0;
  border: 4px double white;

  button {
    background-color: transparent;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
`

export const DetailText = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-out;

  &.viewDetail {
    max-height: 400px;
    transition: max-height 0.5s ease-in;
  }
`
