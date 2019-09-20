import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  transform: ${props => (props.show ? "translateY(0vh)" : "translateY(-100vh)")};
  display: ${props => (props.show ? "block" : "none")};
`
export const ModalMain = styled.section`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ModalHeader = styled.div`
  background: ${props => props.theme.red};
  height: 40px;
  line-height: 40px;
  padding: 5px 20px;
  text-align: right;

  & > h3 {
    color: white;
    float: left;
    margin: 0;
    padding: 0;
  }
`
export const CloseButton = styled.span`
  color: white;
  cursor: pointer;
  float: right;
  font-size: 30px;
  margin: 0;

  &:hover {
    color: #fff;
  }
`

export const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 15px;
  overflow: auto;
`

export const ModalBodyContent = styled.div`
  height: 350px;
`

export const DisplayNames = styled.div`
  display: flex;

  & > :first-child {
    margin-right: 10px;
  }
`

export const WrapParticipations = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  & > p {
    font-size: 21px;
  }
`

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ItemBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
  -webkit-box-shadow: 0px 0px 25px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 25px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 25px -9px rgba(0, 0, 0, 0.75);
  padding: 10px;
  margin: 0 15px 15px;
  width: 150px;
`

const loadingKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Loading = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;

  &:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #000;
    border-color: #000 transparent #000 transparent;
    animation: ${loadingKeyframe} 1.2s linear infinite;
  }
`

export const ModalFooter = styled.div`
  background: ${props => props.theme.red};
  height: 35px;
  padding: 15px;
`

export const ModalCloseButon = styled.button`
  background: coral;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  padding: 10px;
  background-color: #b71c1c;
  float: left;
`
