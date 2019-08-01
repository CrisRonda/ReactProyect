import styled, { css } from 'styled-components'
import { fadeIn, fadeOut } from '../../styles/animation'
export const List = styled.ul`
  display: flex;
  overflow: scroll;
  margin-top: -30px;
  padding-bottom: 20px;
  width: 100%;
  ${props => props.fixed && css`
    ${fadeIn('2s')}
    background:#fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0,0,0,0);
    left: 0;
    margin: 0 auto;
    max-width: 400px; 
    padding: 5px;
    position: fixed;
    top: -20px;
    transform: scale(.5);
    z-index: 1;`}
`

export const Item = styled.li`
  padding: 0 8px;
`
