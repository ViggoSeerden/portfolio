import { EuiBadge, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiImage, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";

export function S5_Pricelist() {
    const tags: Record<string, string>[] = [
        { key: 'NextJS', value: 'primary' },
        { key: 'React Native', value: 'primary' },
        { key: 'Python', value: 'primary' },
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
                <EuiTitle size='s'><h1>Pricelist</h1></EuiTitle>
                <EuiSpacer size='s' />
                <EuiFlexGrid columns={3} gutterSize="s" direction="row">
                    {tags.map((tag) => (
                        <EuiBadge key={tag.key} color={tag.value}>{tag.key}</EuiBadge>
                    ))}
                </EuiFlexGrid>
                <EuiSpacer size='s' />
                <EuiText>
                    A content management tool to be used in both physical and digital sales environments.
                </EuiText>
                <EuiText>
                    This platform is used to manage content for a sales environment, including projects relevant to my internship.
                    A mobile version is available too, allowing for orders to be placed in physical environments by guests and customers.
                </EuiText>
                <EuiText>
                    My involvement with this project included porting the front-end it to a NextJS based monorepo, remaking
                    the tables using ElasticUI, adding a new shop and refactoring some code in the mobile platform, creating 
                    new endpoints in the back-end to be used by other projects relevant to my internship, and helping rebuild 
                    the back-end from scratch for a new version.
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