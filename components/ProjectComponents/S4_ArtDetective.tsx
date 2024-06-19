import { EuiBadge, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiImage, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";

export function S4_ArtDetective() {
    const tags: Record<string, string>[] = [
        { key: 'Kotlin', value: 'primary' },
        { key: 'Jetpack Compose', value: 'primary' },
        { key: 'Object Detection', value: 'accent' },
        { key: 'TensorFlow', value: 'accent' },
        { key: 'Google Colab', value: 'accent' },
        { key: 'Semester 4', value: 'warning' },
        { key: 'Duo Project', value: 'warning' },
    ]

    return (
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiTitle size='s'><h1>Art Detective</h1></EuiTitle>
                <EuiSpacer size='s' />
                <EuiFlexGrid columns={3} gutterSize="s" direction="row">
                    {tags.map((tag) => (
                        <EuiBadge key={tag.key} color={tag.value}>{tag.key}</EuiBadge>
                    ))}
                </EuiFlexGrid>
                <EuiSpacer size='s' />
                <EuiText>
                    A native Android app that allows users to identify famous paintings and their artists by taking a picture.
                </EuiText>
                <EuiText>
                    A custom TensorFlow model was trained to recognize 10 world renowned paintings using Google Colab. After the results are returned,
                    users have the option to learn more about the detected painting and it's artist, being redirected to a Google search to do so.
                </EuiText>
                <EuiText>
                    The original concept also included being able to recognize music and movies, as well as being able to find upcoming art exhibits.
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