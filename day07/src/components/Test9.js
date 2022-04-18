import styled , { css } from 'styled-components'


/* ${ porps => props.해당props명}  */
const Container  = styled.div`    
    width: ${ props => props.ww };  
    margin:20px auto;
    padding:20px;
    border:1px solid #000; 
    background: ${ props => props.bg ? props.bg : 'beige'};
`

const Box  = styled.button`
    width:${ props => props.width ? props.width: '100px'}; 
    border:none;
    height:50px; margin:10px;
    background: ${ props => props.bgColor ? props.bgColor : '#333'};
    color:#fff; 

    ${ props  => props.vscss && css`
        background: tomato; width:100%; color:#000; font-size:20px; text-transform:uppercase ;
        transition:0.5s;
        &:hover {
            background:green; color:#fff;
        }   
    `}
`

const Test9 = () => {
    return (
        <Container ww="550px" bg="pink">
            <Box width="150px" bgColor="hotpink">test</Box>
            <Box width="200px">test</Box>
            <Box>test</Box>
            <Box width="80px" bgColor="lime">test</Box>
            <Box vscss >test</Box>            
        </Container>
    );
};

export default Test9;