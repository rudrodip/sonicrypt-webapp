import GuideSection from "../guide";

const steps = [
  "Either connect your wallet or input the wallet address in the input form",
  "Select the blockchain network or leave it as default",
  "On each transaction, the emulator will notify you like the physical device",
  "You can view the transaction history by clicking on the 'Transaction' tab",
  "Recent transactions will be displayed below the emulator",
];

export default function EmulatorSection() {
  return (
    <GuideSection
      title="Emulator"
      steps={steps}
      media="https://firebasestorage.googleapis.com/v0/b/collabsync-yt.appspot.com/o/emulator.webm?alt=media&token=398608d6-4836-4f47-971a-b9108fe5574c"
    />
  );
}
