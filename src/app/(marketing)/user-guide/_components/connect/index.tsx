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
      media="https://firebasestorage.googleapis.com/v0/b/collabsync-yt.appspot.com/o/sonicrypt-demo.webm?alt=media&token=dc105662-fd7c-44a5-bb76-db9a3ba25693"
    />
  );
}
