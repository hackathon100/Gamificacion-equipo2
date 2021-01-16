import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const TableWithPagination = ({ headers, rows }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="table-with-pagination-container d-flex flex-column">
      <TableContainer>
        <Table aria-label="table">
          <TableHead>
            <TableRow className="table-header">
              {headers.map((header) => (
                <TableCell align={header.align} key={header.key}>
                  {header.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {headers.map((header, headerIndex) => {
                  if (header.button) {
                    return (
                      <TableCell align={header.align} key={`${rowIndex}-${headerIndex}`}>
                        <IconButton href={row[header.key]} size="small">
                          {header.button}
                        </IconButton>
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell align={header.align} key={`${rowIndex}-${headerIndex}`}>
                      {row[header.key]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
            <TableRow>
              <TablePagination
                className="table-pagination"
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                count={rows.length}
                labelDisplayedRows={({ from, to, count }) =>
                  `${from}-${to} de ${count !== -1 ? count : `more than ${to}`}`
                }
                labelRowsPerPage="Entradas por página"
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'Entradas por página' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

TableWithPagination.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default TableWithPagination;
