import { EuiBottomBar, EuiFlexGroup, EuiThemeColorMode } from "@elastic/eui";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function Footer({ theme }: { theme: EuiThemeColorMode }) {
    return (
        <EuiBottomBar
            position="static"
            bottom={0}
            style={{
                backgroundColor: theme == 'light' ? 'white' : '#1d1e24',
                color: theme == 'light' ? 'black' : 'white'
            }}
        >
            <EuiFlexGroup justifyContent="flexEnd">
                <Link href='https://github.com/ViggoSeerden' target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="2xl"/>
                </Link>
                <Link href='https://www.linkedin.com/in/viggo-seerden-84b48b21b/' target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
                </Link>
            </EuiFlexGroup>
        </EuiBottomBar>
    )
}