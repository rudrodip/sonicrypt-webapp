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
      media="https://firebasestorage.googleapis.com/v0/b/collabsync-yt.appspot.com/o/configure.webm?alt=media&token=6d2be0a5-b198-43cb-a6be-5031881e43bd"
    />
  );
}
