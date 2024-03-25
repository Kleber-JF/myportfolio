import styled from 'styled-components'

export const ProjectContainer = styled.div`
  display: flex;
  height: 400px;
  justify-content: space-between;
`

export const ProjectImage = styled.img`
  max-width: 600px;
  max-height: 300px;
  height: 100%;
  object-fit: cover;
`
export const ProjectText = styled.div`
  width: 100%;

  button {
    padding: 4px;
    background-color: transparent;
    border: 2px solid white;

    &:hover {
      cursor: pointer;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  background-color: #2e2b2b;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 8px;
  border: 2px solid white;

  @media (max-width: 767px) {
    width: 90%;
  }

  > img {
    width: 16px;
    height: 16px;
    margin-top: 8px;
    margin-right: 8px;
    cursor: pointer;
  }

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }
`

export const ModalLinks = styled.div`
  margin-bottom: 8px;
  display: flex;
  width: 100%;
  height: 24px;
  align-items: center;
  justify-content: center;
  gap: 16px;

  a {
    text-decoration: none;
    font-size: 20px;
  }
`

export const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  padding: 20px;
  column-gap: 24px;
  width: 100%;
  align-items: center;

  img {
    margin-bottom: 16px;
    width: 360px;
    height: 280px;
    object-fit: cover;
    border-radius: 8px;
    border: 4px double white;

    @media (max-width: 767px) {
      width: 180px;
      height: 180px;
    }
  }

  p {
    max-height: 176px;
    max-width: 656px;
    line-height: 22px;
    font-size: 14px;
    margin: 16px 0;

    @media (max-width: 768px) {
      max-height: 200px;
      width: 100%;
      height: 100%;
      line-height: 18px;
    }

    @media (min width: 768px) and (max-width: 1023px) {
      max-height: 200px;
      width: 100%;
      height: 100%;
      line-height: 18px;
    }
  }
`
export const ModalList = styled.div`
  width: 100%;
  ul {
    margin-top: 8px;
    display: flex;
    flex-direction: row;
  }

  li {
    white-space: nowrap;
    padding: 4px 8px;
    margin-right: 4px;
    line-wrap: nowrap;
    border: 2px solid white;
    border-radius: 24px;
    font-size: 14px;
  }
`

export const LinkList = styled.ul`
  display: inline-block;
  white-space: nowrap;
  max-width: 280px;
  height: 100%;

  li {
    button {
      padding: 16px 4px;
      width: 100%;
      background-color: transparent;
      border: none;
      border: 2px solid white;

      &:hover {
        cursor: pointer;
      }
    }
  }
`
