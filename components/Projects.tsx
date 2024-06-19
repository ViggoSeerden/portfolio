import { EuiButtonEmpty, EuiButtonIcon, EuiFlexGroup, EuiFlexItem, EuiPanel, EuiText } from "@elastic/eui";
import { useState } from "react";
import { S6_Pokedex } from "./ProjectComponents/S6_Pokedex";
import { S6_ITWorkz } from "./ProjectComponents/S6_ITWorkz";
import { S4_Broadway } from "./ProjectComponents/S4_Broadway";
import { S4_ArtDetective } from "./ProjectComponents/S4_ArtDetective";
import { S4_ForecastFrenzy } from "./ProjectComponents/S4_ForecastFrenzy";
import { S4_Stolpersteine } from "./ProjectComponents/S4_Stolpersteine";
import { S3_TartarusSimulator } from "./ProjectComponents/S3_TartarusSimulator";
import { S3_iOColleagueTracker } from "./ProjectComponents/S3_iOColleagueTracker";
import { S2_RockstarsITContent } from "./ProjectComponents/S2_RockstarsITContent";
import { S2_TheShelves } from "./ProjectComponents/S2_TheShelves";
import { S1_BuddyToGo } from "./ProjectComponents/S1_BuddyToGo";
import { S5_Pricelist } from "./ProjectComponents/S5_Pricelist";
import { S5_iMproviser } from "./ProjectComponents/S5_iMproviser";
import { S5_BackingTrackShop } from "./ProjectComponents/S5_BackingTrackShop";
import { Miscellaneous } from "./ProjectComponents/Miscellaneous";
import { S5_ShopShop } from "./ProjectComponents/S5_ShopShop";

export function Projects() {
    const [currentPage, setCurrentPage] = useState(0);
    const pages = [
        <S6_ITWorkz />, 
        <S6_Pokedex />, 
        <S5_Pricelist />,
        <S5_iMproviser />,
        <S5_BackingTrackShop />,
        <S5_ShopShop />,
        <S4_Stolpersteine/>, 
        <S4_ForecastFrenzy/>, 
        <S4_ArtDetective/>, 
        <S4_Broadway />, 
        <S3_iOColleagueTracker />, 
        <S3_TartarusSimulator/>,
        <S2_RockstarsITContent />,
        <S2_TheShelves />,
        <S1_BuddyToGo/>,
        <Miscellaneous />
    ]

    function nextProject() {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    function previousProject() {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <EuiFlexGroup direction="column">
            <EuiFlexItem>
                <EuiPanel hasBorder={false} hasShadow={false} style={{
                    borderRadius: 20,
                    border: '2px solid #36a2ef',
                    filter: 'drop-shadow(0 5px 5px rgba(0, 0, 0, .5))'
                }}>
                    {pages[currentPage]}
                </EuiPanel>
            </EuiFlexItem>
            <EuiFlexGroup alignItems="center" justifyContent="center" gutterSize="s">
                <EuiButtonIcon
                    iconType="arrowLeft"
                    onClick={previousProject}
                />
                {pages.map((page, index) => (
                    <EuiButtonEmpty key={index} onClick={() => setCurrentPage(index)}>
                        {currentPage == index ? <EuiText>•</EuiText> : <EuiText>o</EuiText>}
                    </EuiButtonEmpty>
                ))}
                <EuiButtonIcon
                    iconType="arrowRight"
                    onClick={nextProject}
                />
            </EuiFlexGroup>
        </EuiFlexGroup>
    )
}