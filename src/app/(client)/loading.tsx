import Image from "next/image";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="w-100 h-100 rounded-sm overflow-hidden mb-4 relative">
      {/* <Image src="/loading.png" alt="loading" layout="fill" objectFit="cover" /> */}
      <p>Loading...</p>
    </div>
  );
}