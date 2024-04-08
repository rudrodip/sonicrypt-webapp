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
      media="https://firebasestorage.googleapis.com/v0/b/collabsync-yt.appspot.com/o/connect.webm?alt=media&token=6f18a518-35e8-4be5-bcc4-ad2abd0b808b"
    />
  );
}
