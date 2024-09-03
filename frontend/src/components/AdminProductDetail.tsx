import { useState } from "react";
import { Collapse, IconButton, TableCell, TableHead, TableBody, TableRow, Box, Typography, Table } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Product } from "src/types/IProduct";

interface Props {
  row: Product;
}

export default function AdminProductDetail({row}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">{row.quantity}</TableCell>
        <TableCell align="right">{row.weight}</TableCell>
      </TableRow>
      <TableRow>
      </TableRow>
    </div>
  );
}