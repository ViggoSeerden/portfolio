import { EuiBadge, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiImage, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";

export function S6_ITWorkz() {
    const tags: Record<string, string>[] = [
        { key: 'Flutter', value: 'primary' },
        { key: '.NET Core', value: 'primary' },
        { key: 'OpenAI', value: 'accent' },
        { key: 'Scrum', value: 'accent' },
        { key: 'App Store', value: 'accent' },
        { key: 'Material Design', value: 'accent' },
        { key: 'Semester 6', value: 'warning' },
        { key: 'Group Project', value: 'warning' },
    ]

    return (
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiTitle size='s'><h1>IT-Workz Self Service Portal</h1></EuiTitle>
                <EuiSpacer size='s' />
                <EuiFlexGrid columns={3} gutterSize="s" direction="row">
                    {tags.map((tag) => (
                        <EuiBadge key={tag.key} color={tag.value}>{tag.key}</EuiBadge>
                    ))}
                </EuiFlexGrid>
                <EuiSpacer size='s' />
                <EuiText>
                    A project commisioned by IT-Workz, a company specializing in IT support for educational institutes.

                </EuiText>
                <EuiText>
                    This company was dissatisfied with the amount of issues reported by teachers and students that were
                    simple to solve, such as problems with internet connections, printers or user accounts.
                </EuiText>
                <EuiText>
                    The app we ended up making consisted of a troubleshooting guide component, in addition to an AI powered chatbot.
                    For this, we used OpenAI's GPT 3.5 Turbo model.
                </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiFlexGrid columns={2}>
                    <EuiImage src='images/react.png' alt='project_image' size='m' />
                    <EuiImage src='images/react.png' alt='project_image' size='m' />
                    <EuiImage src='images/react.png' alt='project_image' size='m' />
                    <EuiImage src='images/react.png' alt='project_image' size='m' />
                </EuiFlexGrid>
            </EuiFlexItem>
        </EuiFlexGroup>
    )
}