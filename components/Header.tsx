import { EuiButtonIcon, EuiFlexGroup, EuiHeader, EuiHeaderSection, EuiText, EuiThemeColorMode } from "@elastic/eui";

export function Header({ theme, changeTheme }: { theme: EuiThemeColorMode, changeTheme: (theme: EuiThemeColorMode) => void }) {
    return (
        <EuiHeader>
            <EuiFlexGroup direction="row" alignItems="center" justifyContent="center">
                <EuiHeaderSection grow>
                    <EuiText>
                        &nbsp; Viggo Seerden
                    </EuiText>
                </EuiHeaderSection>
                <EuiHeaderSection>
                    <>
                        {theme == 'dark' ? (
                            <EuiButtonIcon
                                iconType='sun'
                                onClick={() => changeTheme('light')}
                            />
                        ) : (
                            <EuiButtonIcon
                                iconType='moon'
                                onClick={() => changeTheme('dark')}
                            />
                        )}
                    </>
                    &nbsp;
                </EuiHeaderSection>
            </EuiFlexGroup>
        </EuiHeader>
    )
}