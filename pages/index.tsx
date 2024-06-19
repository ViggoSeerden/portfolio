import { EuiFlexGroup, EuiFlexItem, EuiImage, EuiPage, EuiPanel, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";
import { Experience } from "../components/Experience";

export default function Home() {
  return (
    <EuiPage css={{ padding: 16 }}>
      <EuiPanel>
        <EuiFlexGroup direction="row" gutterSize="xs">
          <EuiFlexItem grow={1}>
            <EuiImage size='l' src='images/pfp.jpg' alt='Picture of Viggo Seerden' style={{ borderRadius: 360, filter: 'drop-shadow(0 5px 5px rgba(0, 0, 0, .5))' }}/>
          </EuiFlexItem>
          <EuiFlexItem grow={3}>
            <EuiPanel hasBorder={false} hasShadow={false}>
              <EuiFlexGroup direction="column">
                <EuiTitle size="l"><h1>Viggo Seerden</h1></EuiTitle>
                <EuiText css={{ fontSize: 24 }}>
                  Student at Fontys University of Applied Science, studying ICT at HBO level. Currently in my 6th semester. <br/>
                  Working part-time as a junior software developer at IT company Formatics. 
                </EuiText>
                <EuiText css={{ fontSize: 24 }}>
                  Born April 26th 2004. Currently residing in Weert, Limburg, The Netherlands.
                </EuiText>
              </EuiFlexGroup>
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
      <EuiSpacer />
      <Experience />
    </EuiPage>
  );
}
