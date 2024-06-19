import { EuiBadge, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiImage, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";

export function S3_TartarusSimulator() {
    const tags: Record<string, string>[] = [
        { key: 'React', value: 'primary' },
        { key: '.NET Core', value: 'primary' },
        { key: 'SQL', value: 'primary' },
        { key: 'Unity', value: 'accent' },
        { key: 'Semester 3', value: 'warning' },
        { key: 'Individual Project', value: 'warning' },
    ]

    return (
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiTitle size='s'><h1>Tartarus Simulator</h1></EuiTitle>
                <EuiSpacer size='s' />
                <EuiFlexGrid columns={3} gutterSize="s" direction="row">
                    {tags.map((tag) => (
                        <EuiBadge key={tag.key} color={tag.value}>{tag.key}</EuiBadge>
                    ))}
                </EuiFlexGrid>
                <EuiSpacer size='s' />
                <EuiText>
                    A full-stack project including a game, playable directly in your browser.
                </EuiText>
                <EuiText>
                    Using the Unity framework, I made a game that was fully playable on the website. The game was able to communicate with the front-end,
                    with data being able to be sent to and from the game.
                </EuiText>
                <EuiText>
                    The game, based on Persona 3, is a 3D turn based dungeon crawling RPG in which players explore randomly generated dungeons and
                    fight enemies. Users with an account on the website could save their progress in the game to the SQL database.
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