import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    overflow-y: auto;
    width: 100vw;
    height: 100vh;
    background-color: lightpink;
    padding: 50px;
`;

function TestProject2() {
    return (
        <div className="Test2">
            <Wrapper id="Test2">
            <h1>Test2</h1>
            </Wrapper>
        </div>
    )
}

export default TestProject2;