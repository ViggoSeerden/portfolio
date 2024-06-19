import { EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiImage, EuiPanel, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";
import { Projects } from "./Projects";

export function Experience() {
    return (
        <EuiFlexGroup>
            <EuiPanel>
                <EuiTitle><h1>Experience & Skills</h1></EuiTitle>
                <EuiSpacer size="s" />
                <EuiFlexGroup>  
                    <EuiFlexItem grow={1}>
                        <EuiText>
                            During the past school semesters, I've learned to work with a wide variety of programming languages and frameworks.
                            Additionally, I've picked up several professional skills that help drive my work ethic.
                        </EuiText>
                        <EuiSpacer size="m" />
                        <EuiFlexGrid columns={4} alignItems="start" >
                            <EuiImage src='images/csharp.png' alt='c_sharp' size='s' style={{ filter: 'drop-shadow(0 5px 5px rgba(0, 0, 0, .3))' }}/>
                            <EuiImage src='images/python.png' alt='python' size='s' style={{ filter: 'drop-shadow(0 5px 5px rgba(0, 0, 0, .3))' }}/>
                            <EuiImage src='images/react.png' alt='react' size='s' style={{ filter: 'drop-shadow(0 5px 5px rgba(0, 0, 0, .3))' }}/>
                            <EuiImage src='images/flutter.png' alt='flutter' size='s' style={{ filter: 'drop-shadow(0 5px 5px rgba(0, 0, 0, .3))' }}/>
                        </EuiFlexGrid>
                    </EuiFlexItem>
                    <EuiFlexItem grow={1}>
                        <Projects />
                    </EuiFlexItem>
                </EuiFlexGroup>
                <EuiSpacer size="m" />
                {/* skills? */}
            </EuiPanel>
        </EuiFlexGroup>
    )
}