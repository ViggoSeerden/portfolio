import { EuiBadge, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiImage, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";

export function S3_iOColleagueTracker() {
    const tags: Record<string, string>[] = [
        { key: 'React', value: 'primary' },
        { key: '.NET Core', value: 'primary' },
        { key: 'Ionic Framework', value: 'accent' },
        { key: 'Firebase', value: 'accent' },
        { key: 'Amazon Web Service', value: 'accent' },
        { key: 'Scrum', value: 'accent' },
        { key: 'Semester 3', value: 'warning' },
        { key: 'Group Project', value: 'warning' },
    ]

    return (
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiTitle size='s'><h1>iO Colleague Tracker</h1></EuiTitle>
                <EuiSpacer size='s' />
                <EuiFlexGrid columns={3} gutterSize="s" direction="row">
                    {tags.map((tag) => (
                        <EuiBadge key={tag.key} color={tag.value}>{tag.key}</EuiBadge>
                    ))}
                </EuiFlexGrid>
                <EuiSpacer size='s' />
                <EuiText>
                    An app that allows users to see whether their colleagues are working from home or the office, commisioned by iO Digital.
                </EuiText>
                <EuiText>
                    Users were able to set their location manually, with an option to change this location after a set amout of time has passed.
                    This location would then be visible to all colleagues, if the user provided permission for this. Location data could also
                    be updated automatically, based on iO's WiFi logs which were provided to us.
                </EuiText>
                <EuiText>
                    The app allowed for users to notify their colleagues when they needed help with something, after which a push notification would
                    be sent to the chosen colleague. The option to filter the list of colleagues was also available.
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