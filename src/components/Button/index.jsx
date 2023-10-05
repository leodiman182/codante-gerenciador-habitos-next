import { Button as MUIButton } from "@mui/material";

export default function Button({ text }) {
  return (
    <MUIButton color="primary" variant="outlined">
      {text}
    </MUIButton>
  );
}
