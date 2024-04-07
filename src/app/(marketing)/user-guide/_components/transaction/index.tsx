import GuideSection from "../guide";

const steps = [
  "Tap on the 'Transaction' tab",
  "You can select blockchain network or leave it as default",
  "Select the number of transaction history you want to view, it will automatically load the transaction history",
  "Click on any transaction to view the details of the transaction which is powered by Solana Explorer",
];

export default function TransactionSection() {
  return (
    <GuideSection
      title="Transaction"
      steps={steps}
      media="https://firebasestorage.googleapis.com/v0/b/collabsync-yt.appspot.com/o/transaction.webm?alt=media&token=80920f6a-0835-4551-b09c-5ed478941087"
    />
  );
}
