import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import stylded from 'styled-components';
import styled from 'styled-components';

const Main = styled.main`
    background-color: #000000;
    color: #FFFFFF;
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

function PageDefault({children}) {
    return (   
        <>
            <Menu/>
                <Main>
                    {children}
                </Main>
            <Footer/>
        </> 
    );
}

export default PageDefault;