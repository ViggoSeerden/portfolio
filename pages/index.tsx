import { EuiFlexGroup, EuiFlexItem, EuiImage, EuiPage, EuiPanel, EuiSpacer, EuiTitle } from "@elastic/eui";
import { Experience } from "../components/Experience";

export default function Home() {
  return (
    <EuiPage css={{ padding: 8 }}>
      <EuiPanel>
        <EuiFlexGroup direction="row" gutterSize="xs">
        <EuiFlexItem grow={1}>
            <EuiImage size='l' src='images/pfp.jpg' alt='me' style={{ borderRadius: 360 }} />
          </EuiFlexItem>
          <EuiFlexItem grow={3}>
            <EuiPanel hasBorder={false} hasShadow={false}>
              <EuiFlexGroup direction="column">
                <EuiTitle size="l"><h1>Viggo Seerden</h1></EuiTitle>
                <EuiTitle size="s"><h3>
                  Student at Fontys University of Applied Science, studying ICT at HBO level.  
                  </h3></EuiTitle>
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
