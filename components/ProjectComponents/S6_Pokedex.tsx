import { EuiBadge, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiImage, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";

export function S6_Pokedex() {
    const tags: Record<string, string>[] = [
        { key: 'Flutter', value: 'primary' },
        { key: 'Object Detection', value: 'accent' },
        { key: 'Teachable Machine with Google', value: 'accent' },
        { key: 'TensorFlow', value: 'accent' },      
        { key: 'Material Design', value: 'accent' },
        { key: 'Augumented Reality (AR)', value: 'accent' },
        { key: 'Semester 6', value: 'warning' },
        { key: 'Individual Project', value: 'warning' },
    ]

    return (
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiTitle size='s'><h1>RotomDex</h1></EuiTitle>
                <EuiSpacer size='s' />
                <EuiFlexGrid columns={3} gutterSize="s" direction="row">
                    {tags.map((tag) => (
                        <EuiBadge key={tag.key} color={tag.value}>{tag.key}</EuiBadge>
                    ))}
                </EuiFlexGrid>
                <EuiSpacer size='s' />
                <EuiText>
                    An application that acts as a Pokédex, a Pokémon encyclopedia to be used as an companion app of sorts while engaging with Pokémon content.
                </EuiText>
                <EuiText>
                    This app allows users to look up information about each of the original 151 Pokémon, as well as all Pokémon moves and abilities.
                    Notable gimmicks include object detection using a self-trained TensorFlow model, and AR using official 3D Pokémon model assets.
                </EuiText>
                <EuiText>
                    I took design cues from official Pokédex interpretations, and used Google's Material Design guidelines to improve the designs and 
                    user experience for mobile devices.
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