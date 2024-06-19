import { EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiImage, EuiPanel, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";
import { Projects } from "./Projects";

export function Experience() {
    return (
        <EuiFlexGroup>
            <EuiPanel>
                <EuiFlexGroup>
                    <EuiFlexItem grow={1}>
                        <Projects />
                    </EuiFlexItem>
                    <EuiFlexItem grow={1}>
                        <EuiTitle><h1>Experience & Skills</h1></EuiTitle>
                        <EuiSpacer size="s" />
                        <EuiText>
                            During the past school semesters, I've learned to work with a wide variety of programming languages and frameworks.
                            Additionally, I've picked up several professional skills that help drive my work ethic.
                        </EuiText>
                        <EuiSpacer size="m" />
                        <EuiFlexGrid columns={4} alignItems="start" >
                            <EuiImage src='images/csharp.png' alt='c_sharp' size='s' />
                            <EuiImage src='images/python.png' alt='python' size='s' />
                            <EuiImage src='images/react.png' alt='react' size='s' />
                            <EuiImage src='images/flutter.png' alt='flutter' size='s' />
                        </EuiFlexGrid>
                    </EuiFlexItem>
                </EuiFlexGroup>
                <EuiSpacer size="m" />
                {/* skills? */}
            </EuiPanel>
        </EuiFlexGroup>
    )
}