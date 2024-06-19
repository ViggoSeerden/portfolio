import { EuiBadge, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiImage, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";

export function S1_BuddyToGo() {
    const tags: Record<string, string>[] = [
        { key: '.NET Core', value: 'primary' },
        { key: 'WPF', value: 'accent' },
        { key: 'Semester 1', value: 'warning' },
        { key: 'Group Project', value: 'warning' },
    ]

    return (
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiTitle size='s'><h1>Buddy ToGo</h1></EuiTitle>
                <EuiSpacer size='s' />
                <EuiFlexGrid columns={3} gutterSize="s" direction="row">
                    {tags.map((tag) => (
                        <EuiBadge key={tag.key} color={tag.value}>{tag.key}</EuiBadge>
                    ))}
                </EuiFlexGrid>
                <EuiSpacer size='s' />
                <EuiText>
                    A social media platform designed for students to help or get to know one another.
                </EuiText>
                <EuiText>
                    Besides just making new friends, Buddy ToGo provided users with a set of features designed to give or receive help 
                    from trusted friends, in order to tackle the issue of loneliness and safety concerns.
                </EuiText>
                <EuiText>
                    Using this platform, users were able to arrange dates, comfort others about personal issues through a chat, or share their
                    location to friends for them to keep an eye on, in the event something goes wrong.
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