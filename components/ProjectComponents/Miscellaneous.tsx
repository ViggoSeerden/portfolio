import { EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";

export function Miscellaneous() {
    return (
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiTitle size='s'><h1>Miscellaneous Projects</h1></EuiTitle>
                <EuiSpacer size='s' />
                <EuiTitle size='xs'><h1>Philips van Horne HAVO Natuur & Techniek</h1></EuiTitle>
                <EuiText>
                    • Made a simple website using HTML and CSS in my fourth year. <br/>
                    • Made a 2D platforming game using Game Maker Studio 1.4 (using Game Maker Language, based on C++), in my fourth year. <br/>
                    • Learned SQL, managed a database and generated statistic reports using Microsoft Access in my final year. <br/>
                </EuiText>
                <EuiSpacer size='s' />
                <EuiTitle size='xs'><h1>Fontys HBO-ICT Bachelor</h1></EuiTitle>
                <EuiText>
                    • Created a chatbot using Google DialogFlow and embedded it in a simple HTML/CSS website in semester 1. <br/>
                    • Wrote several small scripts and games for an Arduino using C++ in semester 1. <br/>
                    • Visualized data in graphs using R Studio, ggplot2, and dplyr in semester 1. <br/>
                    • Wrote several small programs and games to learn C# in semester 1. <br/>
                    • Set up a server using a Linux based virtual machine and hosted a simple website on it in semester 1. <br/>
                    • Wrote a couple of sorting algorithms that sort a selection of items based on given criteria in semester 2. <br/>
                    • Made a few small mobile focused tech demo's in React, Kotlin and Swift about navigation, webviews and battery level indications 
                    respectively in semester 4. <br/>
                    • Wrote couple of small scripts in Python to help learn the language itself and the FastAPI framework in semester 5. <br/>
                </EuiText>
                <EuiSpacer size='s' />
                <EuiTitle size='xs'><h1>Other Projects</h1></EuiTitle>
                <EuiText>
                    • Made two portfolio sites detailing my experiences, this being the newer one. <br/>
                    • Made several prototypes for games in Unity in my own time for fun. <br/>
                </EuiText>
            </EuiFlexItem>
        </EuiFlexGroup>
    )
}