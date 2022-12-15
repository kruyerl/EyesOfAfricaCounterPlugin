import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledIcon = styled.span`
    @font-face {
    font-family: 'Material Symbols Outlined';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v74/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1n-q_4MrImHCIJIZrDCvHOej.woff2) format('woff2');
    }
    
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
    
`
const StyledNumber = styled.h2`
    margin-top: 8px;
    margin-bottom: 8px;
`
const StyledDetail = styled.h3`
    margin-top: 0px;
    margin-bottom: 8px;
`

const StyledContainer = styled.article`
display: flex;
flex-direction: column;
align-items: center;
`




const Article = ({number, icon, detail}) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        let start = 0 
        const end = number
        const totalDuration = 1500

        const speed = totalDuration/number
        if(start >= end) return
        let timer = setInterval(() => {
            start += 1
            setCount(start)
            if(start >= end) clearInterval(timer)
        }, speed);
    }, [number])
    return <StyledContainer>
        <StyledIcon className="material-symbols-outlined">{icon}</StyledIcon>
        <StyledNumber>{count}</StyledNumber>
        <StyledDetail>{detail}</StyledDetail>
    </StyledContainer>;
};

export default Article