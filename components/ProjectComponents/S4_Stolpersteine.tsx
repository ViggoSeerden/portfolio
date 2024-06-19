import { EuiBadge, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiImage, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";

export function S4_Stolpersteine() {
    const tags: Record<string, string>[] = [
        { key: 'React', value: 'primary' },
        { key: 'Multi Language', value: 'accent' },
        { key: 'Open Street Map', value: 'accent' },
        { key: 'Progressive Web App', value: 'accent' },
        { key: 'Scrum', value: 'accent' },
        { key: 'Semester 4', value: 'warning' },
        { key: 'Group Project', value: 'warning' },
    ]

    return (
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiTitle size='s'><h1>Stolpersteine App</h1></EuiTitle>
                <EuiSpacer size='s' />
                <EuiFlexGrid columns={3} gutterSize="s" direction="row">
                    {tags.map((tag) => (
                        <EuiBadge key={tag.key} color={tag.value}>{tag.key}</EuiBadge>
                    ))}
                </EuiFlexGrid>
                <EuiSpacer size='s' />
                <EuiText>
                    A website for finding and learning about the various Stolpersteine spread across the Benelux, commisioned by Stichting 18 September.
                </EuiText>
                <EuiText>
                    This site provides users with a map that displays all 15.000+ Stolpersteine in The Netherlands, Belgium and Luxembourg, with
                    information on each individual one. Users also had the option to search for specific ones using a set of filters and sorting methods.
                </EuiText>
                <EuiText>
                    Besides this, route navigation to a Stolpersteine of choice was also available, as well as notifications when users were within a
                    specific distance of one. Three languages for screen texts were also available, being Dutch, English and French.
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