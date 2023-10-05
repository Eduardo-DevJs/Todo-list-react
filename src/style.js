import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Label = styled.label `
  color: #fff;
  font-size: 1.2rem;
  display: block;
  margin-bottom: 10px;
`

export const InputCheckBox = styled.input `
  width: 20px;
  height: 20px;
`

export const Form = styled.div`
  background: #2A2A2A;
  padding: 40px;
  border-radius: 4px;
  height: 400px;
  max-width: 600px;
  overflow-y: auto;
`

export const Button = styled.button`
  background-color: #181818;
  padding: .5rem .8rem;
  color: #fff;
  margin-left: 10px ;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 4px;
`

export const Input = styled.input`
  padding: .5rem .8rem;
  color: #333;
  outline: none;
  font-size: 1rem;
`


export const Lista = styled.ul`
  display: flex;
  flex-direction: column;
`

export const Item = styled.li`
  display: flex;
  margin-top: 15px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: #181818;
  font-size: 1rem;

  p{
    color: #fff;
    font-weight: bold;
  }
`



