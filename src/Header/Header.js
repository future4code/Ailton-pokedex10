import React from "react";
import {HeaderContainer} from "./headerStyled"
import {ImagemContainer} from "./headerStyled"
import {ButtonContainer} from "./headerStyled"

const Header = () => {
  return (
    <HeaderContainer>
      <ImagemContainer src="https://s3-alpha-sig.figma.com/img/188b/8582/971b1c096e78f88cb4832f6d4e7cc606?Expires=1659312000&Signature=P2Y6bCpiqjo3crDtgtz4JPYamUr-GXb9XuCD1uKkOTU4T2-1Uo52I5jrTqXG4XJjBv3h5G9Pfpp9OgTaMGWoNEO4H10ewRVtbh2dao9YnAv1RXGT6aLTVPelOKHKBscy1bMIkDwTT83cTfH5J970ksg~kBWGh9wMEmUUWXn9VUPtHILlPUe2cWaZHzZELfX7~G2tN~zDYW-t7IWYFH5f6ldrhtpLrzIE5nhBTvGbCfdL2hD~o1myjg6Q7fi9LfFMAwjmLr~aVzfxLm~wD-cypyAsO3pkDtGIIMpXen7AmO49K59YFD4PvtEcCGpbvZ5vYlil84TU0uAcTb3egx8TNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
      <ButtonContainer>Pokedex</ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
