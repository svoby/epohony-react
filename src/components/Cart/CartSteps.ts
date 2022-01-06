import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const IconBox = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid currentColor;
    margin-bottom: 0.6rem;
    line-height: 100%;
    @media (min-width: 768px) {
        margin-bottom: 0;
        margin-right: 0.888rem;
    }
`;

export const StepsWrapper = styled.div`
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  padding: 0.444rem;
  @media (min-width: 768px) {
        border-radius: 500px;
    }
`;

export const Step = styled(Link) <{ state: 'active' | 'disabled' }>`
    display: block;
    height: 100%;
    padding: 0.8rem 0;
    text-align: none;
    font-size: 0.9rem;
    background: linear-gradient(to right, #064f8d 5%, #2377bf 85%);
    background: ${props => props.state === 'active' ? "linear-gradient(to right, #064f8d 5%, #2377bf 85%)" : "white"};
    color: ${props => props.state === 'active' ? "white" : props.state === 'disabled' ? "#adb5bd" :"var(--primary)"};
    border-radius: 4px;
    text-align: center;
    white-space: nowrap;
    transition: background 0.3s;
    pointer-events: ${props => props.state === 'disabled' ? 'none' : ''};
    &:hover {
        color: white;
        text-decoration: none;
        background: ${props => props.state === 'active' ? "" : "rgba(16,106,182,0.2)"};
        color: ${props => props.state === 'active' ? "" : "var(--primary)"}
    }
    .ico {
        display: none;
    }
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        padding: 0.8rem;
        border-radius: 500px;
        font-size: 1rem;
        .ico {
            display: inline-block;
        }
    }
`;