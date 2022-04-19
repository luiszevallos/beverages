import * as React from 'react';
import {
  styled as styledMui
} from '@mui/material/styles';
import styled from 'styled-components'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styledMui(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    cursor: 'pointer',
  },
}));

const StyledTableRow = styledMui(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function Flastlit(props) {
  const { rows, load } = props

  const navigate = useNavigate()

  const handleClick = row => {
    navigate(`/details/${row.idDrink}`)
  }

  return (
    <Paper sx={{ width: '90%', overflow: 'hidden', margin: '0 auto', minWidth: 370, maxWidth: 720 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell align="left">Categoria</StyledTableCell>
              <StyledTableCell align="center">Detalles</StyledTableCell>
            </TableRow>
          </TableHead>
          { rows.length > 0 ? (
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.idDrink} onClick={() => handleClick(row)}>
                  <StyledTableCell component="th" scope="row">
                    {row.strDrink}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row.strCategory}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Ver
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          ) : (
              <Div>
                <Span>{load ? 'Cargando...' : 'Si Datos Disponible'}</Span>
              </Div>
            )}
        </Table>
      </TableContainer>
    </Paper>
  );
}

const Div = styled.div`
  height: 40px;
  padding-left: 40px;
  display: flex;
  align-items: center;
`

const Span = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #b6b6b6;
`;
