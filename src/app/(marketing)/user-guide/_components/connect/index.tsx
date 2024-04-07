import GuideSection from "../guide";

const steps = [
  "Go to BLE section by clicking on bluetooth icon",
  "Give both bluetooth and location permission",
  "Select the device, and the characteristics ID of your device",
];

export default function ConnectSection() {
  return (
    <GuideSection
      title="Connect"
      steps={steps}
      media="/image/device.svg"
    />
  );
}
