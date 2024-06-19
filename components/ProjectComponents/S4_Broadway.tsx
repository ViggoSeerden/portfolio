import { EuiBadge, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiImage, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";

export function S4_Broadway() {
    const tags: Record<string, string>[] = [
        { key: 'React', value: 'primary' },
        { key: 'Voice Recognition', value: 'accent' },
        { key: 'Progressive Web App', value: 'accent' },
        { key: 'Spotify API', value: 'accent' },
        { key: 'ElasticUI', value: 'accent' },
        { key: 'Semester 4', value: 'warning' },
        { key: 'Duo Project', value: 'warning' },
    ]

    return (
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiTitle size='s'><h1>Broadway</h1></EuiTitle>
                <EuiSpacer size='s' />
                <EuiFlexGrid columns={3} gutterSize="s" direction="row">
                    {tags.map((tag) => (
                        <EuiBadge key={tag.key} color={tag.value}>{tag.key}</EuiBadge>
                    ))}
                </EuiFlexGrid>
                <EuiSpacer size='s' />
                <EuiText>
                    An online platform allowing for voice controlled Spotify playback.
                </EuiText>
                <EuiText>
                    After connecting your Spotify account with a few simple clicks, session controls become accessible to the user. Song queue's and 
                    recommendations based on the current song are also visible to the user. 
                </EuiText>
                <EuiText>
                    This app was later revamped to completely overhaul the code, since the original was admittedly quite unorganized. This version
                    also removes unnecessary features and fixes several bugs for the definitive experience.
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