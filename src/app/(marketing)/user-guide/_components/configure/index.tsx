import GuideSection from "../guide";

const steps = [
  "Connect your solana wallet to the app or just input the wallet address in the input form",
  "Enter necessary info in the fields",
  "Select blockchain network or leave it as default",
  "Click on the 'Submit' button to configure your device",
];

export default function ConfigureSection() {
  return (
    <GuideSection
      title="Configure"
      steps={steps}
      media="https://firebasestorage.googleapis.com/v0/b/collabsync-yt.appspot.com/o/sonicrypt-demo.webm?alt=media&token=dc105662-fd7c-44a5-bb76-db9a3ba25693"
    />
  );
}
