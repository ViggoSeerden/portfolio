import { EuiBadge, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiImage, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";

export function S2_RockstarsITContent() {
    const tags: Record<string, string>[] = [
        { key: 'ASP .NET Core MVC', value: 'primary' },
        { key: 'JavaScript', value: 'primary' },
        { key: 'Entity Framework Core', value: 'accent' },
        { key: 'Scrum', value: 'accent' },
        { key: 'Semester 2', value: 'warning' },
        { key: 'Group Project', value: 'warning' },
    ]

    return (
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiTitle size='s'><h1>Rockstars IT Content Management Platform</h1></EuiTitle>
                <EuiSpacer size='s' />
                <EuiFlexGrid columns={3} gutterSize="s" direction="row">
                    {tags.map((tag) => (
                        <EuiBadge key={tag.key} color={tag.value}>{tag.key}</EuiBadge>
                    ))}
                </EuiFlexGrid>
                <EuiSpacer size='s' />
                <EuiText>
                    A full-stack project commisioned by Team Rockstars acting as an admin content management tool.
                </EuiText>
                <EuiText>
                    Using the front-end, users could manage the content to be displayed on Rockstars' public online platform, including articles, videos,
                    podcasts, development teams and staff. 
                </EuiText>
                <EuiText>
                    A dashboard providing a variety of statistics about the published content was also available, to gain insight on their performance.
                    The front-end also provided both Dutch and English screen texts.
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