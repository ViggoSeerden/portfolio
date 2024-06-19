import { EuiButtonEmpty, EuiButtonIcon, EuiFlexGroup, EuiFlexItem, EuiPanel, EuiText } from "@elastic/eui";
import { useState } from "react";
import { S6_Pokedex } from "./ProjectComponents/S6_Pokedex";
import { S6_ITWorkz } from "./ProjectComponents/S6_ITWorkz";
import { S4_Broadway } from "./ProjectComponents/S4_Broadway";

export function Projects() {
    const [currentPage, setCurrentPage] = useState(0);
    const pages = [<S6_Pokedex />, <S6_ITWorkz />, <S4_Broadway />]

    function nextImage() {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    function previousImage() {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <EuiFlexGroup direction="column">
            <EuiFlexItem>
                <EuiPanel hasBorder hasShadow={false}>
                    {pages[currentPage]}
                </EuiPanel>
            </EuiFlexItem>
            <EuiFlexGroup alignItems="center" justifyContent="center" gutterSize="s">
                <EuiButtonIcon
                    iconType="arrowLeft"
                    onClick={previousImage}
                />
                {pages.map((page, index) => (
                    <EuiButtonEmpty key={index} onClick={() => setCurrentPage(index)} style={{ border: currentPage == index ? '2px solid #36a2ef' : 'none' }}>
                        {index}
                    </EuiButtonEmpty>
                ))}
                <EuiButtonIcon
                    iconType="arrowRight"
                    onClick={nextImage}
                />
            </EuiFlexGroup>
        </EuiFlexGroup>
    )
}