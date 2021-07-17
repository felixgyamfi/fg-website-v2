import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    overflow-y: auto;
    width: 100vw;
    height: 100vh;
    top: 1000px;
    left: 2000px;
    background-color: lightblue;
    padding: 50px;
`;

function TestProject1() {
    return (
        <div className="Test1">
            <Wrapper id="Test1">
            <h1>Test1</h1>
            </Wrapper>
        </div>
    )
}

export default TestProject1;