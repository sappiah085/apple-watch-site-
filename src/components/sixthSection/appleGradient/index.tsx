import apple from "../../../assets/images/6th/privacy_lock_endframe__bsfxwtpon3de_large_2x.png";
import { Text } from "../../common/text/text";
export const AppleGradient = () => {
  return (
    <div className="max-w-6xl w-full bg-gradient-to-tr from-[#ec5e5c] to-[#9858a7] flex justify-center gap-10 items-center rounded-[40px] py-11 -mt-[100px] p-16">
      <img className="h-[150px]" src={apple} alt="apple" />
      <span className="max-w-3xl">
        <Text
          Components="p"
          color="leading-[40px] text-white"
          variant="lg/bold"
        >
          Your Cycle Tracking data stays on your device and is encrypted when
          your phone is locked with a passcode, Touch ID, or Face ID.
        </Text>
      </span>
    </div>
  );
};
