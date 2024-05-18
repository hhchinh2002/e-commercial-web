import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

export type NameInputParentType = {
  firstName?: string;
  namePhoneInputsPlaceholde?: string;
  lastName?: string;
  lastNameEmailInpuPlacehol?: string;
};

const CheckOutSubmissionForm: NextPage<NameInputParentType> = ({
  firstName,
  namePhoneInputsPlaceholde,
  lastName,
  lastNameEmailInpuPlacehol,
}) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full text-left text-xl text-gray-500 font-raleway mq750:flex-wrap">
      <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[271px] max-w-full">
        <div className="self-stretch relative tracking-[-0.5px] mq450:text-base">
          {firstName}
        </div>
        <TextField
          className="[border:none] bg-[transparent] self-stretch h-[55px] font-rubik text-sm text-gray-100"
          placeholder={namePhoneInputsPlaceholde}
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#d9d9d9" },
            "& .MuiInputBase-root": {
              height: "55px",
              borderRadius: "0px 0px 0px 0px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { color: "#909090" },
          }}
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[271px] max-w-full">
        <div className="self-stretch relative tracking-[-0.5px] mq450:text-base">
          {lastName}
        </div>
        <TextField
          className="[border:none] bg-[transparent] self-stretch h-[55px] font-rubik text-sm text-gray-100"
          placeholder={lastNameEmailInpuPlacehol}
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#d9d9d9" },
            "& .MuiInputBase-root": {
              height: "55px",
              borderRadius: "0px 0px 0px 0px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { color: "#909090" },
          }}
        />
      </div>
    </div>
  );
};

export default CheckOutSubmissionForm;
