import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  grid-column: 1/4;
  width: 100%;
  height: 85px;
  align-items: center;
  justify-content: space-between;
  background: #b7c3c8;
  margin-bottom: 110px;
`;

export const ImagemContainer = styled.img`
  width: 307px;
  height: 113px;
  margin: auto;
  padding-top: 15px;
  padding-left: 50px;
  transition: all 0.5s;
    cursor: pointer;

  :hover{
-webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
export const ButtonContainer = styled.img`
   display: flex;
  flex-direction: row;
  justify-content: center;
 align-items: center;
 width: 70px;
  height: 70px;
 margin-right: 20px;
 transition: all 1s;
    cursor: pointer;


:hover{
    -webkit-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
}
  
`
// export const ButtonContainer = styled.button`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   width: 150px;
//   height: 50px;
//   margin-right: 20px;
//   color: #015e82;
//   background: none;
//   border-radius: 8px;
//   border: 2px solid #015e82;
//   font-weight: 700;
//   font-size: 24px;
//   line-height: 36px;
//   -webkit-transition: box-shadow 300 ease-in-out, color 300ms ease-in-out;
//   transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

//   :hover {
//     color: #fff;
//     font-size: 26px;
//     border-color: #012231;
//     box-shadow: 0 0 40px 40px #012231 inset;
//     background: #012231;
//   }
// `;
