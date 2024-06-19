import { EuiBadge, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiImage, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";

export function S5_BackingTrackShop() {
    const tags: Record<string, string>[] = [
        { key: 'NextJS', value: 'primary' },
        { key: 'NodeJS', value: 'primary' },
        { key: 'TypeScript', value: 'primary' },
        { key: 'Multi Language', value: 'accent' },
        { key: 'Stripe', value: 'accent' },
        { key: 'Static Site Generation', value: 'accent' },
        { key: 'Monorepo', value: 'accent' },
        { key: 'Scrum', value: 'accent' },
        { key: 'Semester 5', value: 'warning' },
        { key: 'Internship', value: 'warning' },
        { key: 'Job Experience', value: 'warning' },
    ]

    return (
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiTitle size='s'><h1>Formatics e-Commerce Platform</h1></EuiTitle>
                <EuiSpacer size='s' />
                <EuiFlexGrid columns={3} gutterSize="s" direction="row">
                    {tags.map((tag) => (
                        <EuiBadge key={tag.key} color={tag.value}>{tag.key}</EuiBadge>
                    ))}
                </EuiFlexGrid>
                <EuiSpacer size='s' />
                <EuiText>
                    An e-Commerce platform to be used by entrepreneurs looking to sell their products and services.
                </EuiText>
                <EuiText>
                    This platform acts as a customizable base for an e-Commerce platform, and is to be advertised to people looking to sell. 
                    Payments are handled through Stripe, and content is received from the Pricelist backend. The websites' screen texts are 
                    available in both English and Dutch.
                </EuiText>
                <EuiText>
                    I built this platform in a monorepo using some pre-built components provided to me, and later used it in tandem with other 
                    projects relevant to my internship. 
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