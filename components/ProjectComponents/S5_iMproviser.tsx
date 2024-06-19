import { EuiBadge, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiImage, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";

export function S5_iMproviser() {
    const tags: Record<string, string>[] = [
        { key: 'NextJS', value: 'primary' },
        { key: 'React', value: 'primary' },
        { key: 'React Native', value: 'primary' },
        { key: 'TypeScript', value: 'primary' },
        { key: 'Python', value: 'primary' },
        { key: 'Flask', value: 'accent' },
        { key: 'FastAPI', value: 'accent' },
        { key: 'Pytest', value: 'accent' },
        { key: 'SQLAlchemy', value: 'accent' },
        { key: 'PostgreSQL', value: 'accent' },
        { key: 'ElasticUI', value: 'accent' },
        { key: 'Monorepo', value: 'accent' },
        { key: 'Scrum', value: 'accent' },
        { key: 'Semester 5', value: 'warning' },
        { key: 'Internship', value: 'warning' },
        { key: 'Job Experience', value: 'warning' },
    ]

    return (
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiTitle size='s'><h1>iMproviser</h1></EuiTitle>
                <EuiSpacer size='s' />
                <EuiFlexGrid columns={3} gutterSize="s" direction="row">
                    {tags.map((tag) => (
                        <EuiBadge key={tag.key} color={tag.value}>{tag.key}</EuiBadge>
                    ))}
                </EuiFlexGrid>
                <EuiSpacer size='s' />
                <EuiText>
                    An educational online platform used for learning to improvise over chord progressions.
                </EuiText>
                <EuiText>
                    A variety of tools for learning to improvise over chord progressions are available here, including a plethora of scales
                    and riffs, a scale trainer, and customizable exercises. An iOS version is available too.
                </EuiText>
                <EuiText>
                    My involvement with this project included porting the front-end it to a NextJS based monorepo, remaking the tables using
                    ElasticUI, introducing new features for future use in music education, and a few minor additions in the iOS version.
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