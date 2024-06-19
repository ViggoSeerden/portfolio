import { EuiBadge, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiImage, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";

export function S2_TheShelves() {
    const tags: Record<string, string>[] = [
        { key: 'ASP .NET Core MVC', value: 'primary' },
        { key: 'JavaScript', value: 'primary' },
        { key: 'SQL', value: 'primary' },
        { key: 'Three-Tier Architecture', value: 'accent' },
        { key: 'Object Oriented', value: 'accent' },
        { key: 'SOLID', value: 'accent' },
        { key: 'Semester 2', value: 'warning' },
        { key: 'Individual Project', value: 'warning' },
    ]

    return (
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiTitle size='s'><h1>The Shelves</h1></EuiTitle>
                <EuiSpacer size='s' />
                <EuiFlexGrid columns={3} gutterSize="s" direction="row">
                    {tags.map((tag) => (
                        <EuiBadge key={tag.key} color={tag.value}>{tag.key}</EuiBadge>
                    ))}
                </EuiFlexGrid>
                <EuiSpacer size='s' />
                <EuiText>
                    A full-stack project that allows users to track and manage their video game collection.
                </EuiText>
                <EuiText>
                    The site provides users with a variety of statistics about their collection, such as the total size or worth. Each individual piece
                    can also be viewed in detail, with users being able to provide details about these pieces. Wishlist and log features were also available.
                </EuiText>
                <EuiText>
                    The site used an external API to get the information about each game. Users were able to find the games they want to add through a 
                    search bar, with input acting as the payload for the API call. The option to manually add a game from scratch was also available.
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