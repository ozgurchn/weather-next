import Image from "next/image";

const Loading = () => {
  return (
    <div
      style={{
        zIndex:11,
        position: "absolute",
        left: 0,
        right: 0,
        top: 5,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.3)',
      }}
    >
      <Image src="/loading.svg" alt="loding" width={100} height={100} />
    </div>
  );
};

export default Loading;
