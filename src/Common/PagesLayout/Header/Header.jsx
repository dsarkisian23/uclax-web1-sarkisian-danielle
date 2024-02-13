import styled from "styled-components";

//media query
import { useMediaQuery } from "@/Common/useMediaQuery";

//components
import MediumLarge from "./MediumLarge";
import Small from "./Small";
const Header = () => {
    const { isMediumAndUp } = useMediaQuery();
    return (
        <HeaderStyled>
            {isMediumAndUp ? <MediumLarge /> : <Small />}
        </HeaderStyled>
    );
};

export default Header;

const HeaderStyled = styled.header``;
