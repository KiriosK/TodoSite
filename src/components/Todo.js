import styled from 'styled-components'

export const Todo = styled.div`
    display: flex;
    flex-flow: column;
    color: ${props => props.checked ? 'gray' : '#356859'};
    background-color: ${props => props.checked ? 'rgb(223, 223, 223)' : 'rgb(185, 228, 201, 0.4)'};
    word-wrap: break-word;
    margin: .5rem;
    padding: .5rem;
    border: 1px green solid;
    max-width: 100%;
    vertical-align: middle;
`

export const StyledText = styled.p`
    text-decoration: ${props => props.checked ? 'line-through' : 'none'};
    max-width: 100%;
    align-self: flex-start;
    font-weight: bold;
    padding: .2em;
`