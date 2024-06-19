import { EuiBadge, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiImage, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";

export function S5_ShopShop() {
    const tags: Record<string, string>[] = [
        { key: 'React', value: 'primary' },
        { key: 'Gatsby', value: 'accent' },
        { key: 'Contentful', value: 'accent' },
        { key: 'Algolia', value: 'accent' },
        { key: 'Multi Language', value: 'accent' },
        { key: 'Internship', value: 'warning' },
        { key: 'Job Experience', value: 'warning' },
    ]

    return (
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiTitle size='s'><h1>Formatics e-Commerce Marketing Platform</h1></EuiTitle>
                <EuiSpacer size='s' />
                <EuiFlexGrid columns={3} gutterSize="s" direction="row">
                    {tags.map((tag) => (
                        <EuiBadge key={tag.key} color={tag.value}>{tag.key}</EuiBadge>
                    ))}
                </EuiFlexGrid>
                <EuiSpacer size='s' />
                <EuiText>
                    A website to advertise the Formatics e-Commerce platform.
                </EuiText>
                <EuiText>
                    This website uses Gatsby and Contentful for articles and other content to help advertise Formatics' e-Commerce platform
                    to the public. You can sign up for your own e-Commerce platform using this site.
                </EuiText>
                <EuiText>
                    This site also uses Algolia to search through the content available on the site. All content is also available in both
                    English and Dutch, through the use of Contentful.
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