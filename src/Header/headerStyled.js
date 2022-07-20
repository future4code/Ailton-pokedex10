import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  grid-column: 1/4;
  width: 1310px;
  height: 150px;
  align-items: center;
  justify-content: space-between;
  padding-right: 30px;
  background: #d1dee4;
`;

export const ImagemContainer = styled.img`
  width: 307px;
  height: 113px;
  margin: auto;
  padding-left: 200px;
`;

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 70px;
  color: #d1dee4;
  background: #015e82;
  border-radius: 8px;
  border: 3px solid #015e82;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  -webkit-transition: box-shadow 300 ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  :hover {
    color: #fff;
    font-size: 28px;
    border-color: #012231;
    box-shadow: 0 0 40px 40px #012231 inset;
    background: #012231;
  }
`;
