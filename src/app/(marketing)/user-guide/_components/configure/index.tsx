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
      media="/image/device.svg"
    />
  );
}
