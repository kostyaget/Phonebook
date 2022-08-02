import styled from '@emotion/styled';

export const AppBar = styled.header`
top: 0;
left: 0;
position: sticky;
z-index: 1100;
min-height: 64px;
padding-right: 48px;
padding-left: 48px;
padding-top: 12px;
padding-bottom: 12px;

display: flex;
align-items: center;
background: rgb(144,58,180);
background: linear-gradient(90deg, rgba(144,58,180,1) 40%, rgba(69,69,252,1) 86%);
box-shadow: 0 8px 6px -6px black;
`;