import { EuiBadge, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiImage, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";

export function S4_ForecastFrenzy() {
    const tags: Record<string, string>[] = [
        { key: 'Swift', value: 'primary' },
        { key: 'SwiftUI', value: 'primary' },
        { key: 'Spotify API', value: 'accent' },
        { key: 'WeatherKit', value: 'accent' },
        { key: 'Semester 4', value: 'warning' },
        { key: 'Duo Project', value: 'warning' },
    ]

    return (
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiTitle size='s'><h1>Forecast Frenzy</h1></EuiTitle>
                <EuiSpacer size='s' />
                <EuiFlexGrid columns={3} gutterSize="s" direction="row">
                    {tags.map((tag) => (
                        <EuiBadge key={tag.key} color={tag.value}>{tag.key}</EuiBadge>
                    ))}
                </EuiFlexGrid>
                <EuiSpacer size='s' />
                <EuiText>
                    A weather forecast app that dynamically changes based on the current weather.
                </EuiText>
                <EuiText>
                    Besides simply being able to find weather forecasts, with basic information such as temperature and precipitation, a few unique features
                    were included, such as a recommended Spotify playlist, analogies describing the weather, being able to set alarms, and a dynamic background,
                    all of which are affected by the current weather.
                </EuiText>
                <EuiText>
                    The original concept also included a weather based game, which acted as the app's namesake. In this game, users would be asked to prepare
                    for a set of exaggerated weather conditions to survive, with a daily rotation and online leaderboards.
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