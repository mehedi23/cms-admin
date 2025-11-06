import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import _ from 'lodash'
import styles from './table.module.css'

const data = [
  { id: 1, title: 'The Shawshank Redemption', director: 'Frank Darabont', year: '1994' },
  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: '1972' },
  { id: 3, title: 'The Dark Knight', director: 'Christopher Nolan', year: '2008' },
];

const columns = [
	{
		name: 'Título',
		selector: row => row.title,
		sortable: true,
	},
	{
		name: 'Director',
		selector: row => row.director,
		sortable: true,
	},
	{
		name: 'Año',
		selector: row => row.year,
		sortable: true,
	},
];

const paginationComponentOptions = {
	rowsPerPageText: 'Filas por página',
	rangeSeparatorText: 'de',
	selectAllRowsItem: true,
	selectAllRowsItemText: 'Todos',
};

function Table() {
  // master dataset (so deletions persist) and the current table view
  const [allData, setAllData] = useState(data);
  const [tableData, setTableData] = useState(allData);

  // selection state for selectable rows
  const [selectedRows, setSelectedRows] = useState([]);
  // toggle used to instruct DataTable to clear its internal selection
  const [clearSelected, setClearSelected] = useState(false);
  // whether multi-select (selectable rows) is enabled
  const [multiSelectEnabled, setMultiSelectEnabled] = useState(false);

  const filterObjects = (searchQuery) => {
    const lowercaseQuery = (searchQuery || '').toString().toLowerCase();
    return _.filter(allData, (obj) => {
      return _.some(obj, (value) => {
        if (['string', 'number'].includes(typeof value)) {
          const lowercaseValue = value.toString().toLowerCase();
          return lowercaseValue.includes(lowercaseQuery);
        }

        if (Array.isArray(value)) {
          return value.some(item => {
            if (typeof item === 'object' && item !== null) {
              return Object.values(item).some(subValue => 
                typeof subValue === 'string' && subValue.toLowerCase().includes(lowercaseQuery)
              );
            }
            return false;
          });
        }
        return false;
      });
    });
  };

  const filteringTeble = (value) => {
    const result = filterObjects(value);
    setTableData(result);
  };

  const handleChange = (state) => {
    // DataTable passes an object with `selectedRows`
    setSelectedRows(state?.selectedRows || []);
  };

  const deleteSelected = () => {
    if (!selectedRows || selectedRows.length === 0) return;
    const selectedIds = new Set(selectedRows.map(r => r.id));
    // remove selected items from master dataset so deletions persist
    setAllData(prev => prev.filter(r => !selectedIds.has(r.id)));
    // clear selection in state and instruct DataTable to clear its selection
    setSelectedRows([]);
    setClearSelected(prev => !prev);
  };

  const toggleMultiSelect = () => {
    setMultiSelectEnabled(prev => {
      const next = !prev;
      if (!next) {
        // if turning off multi-select, also clear any selected rows
        setSelectedRows([]);
        setClearSelected(prevClear => !prevClear);
      }
      return next;
    });
  };


  useEffect(() => {
    // keep table view in sync with master dataset
    setTableData(allData);
  }, [allData]);

  

  return (
    <div>
      <div className={styles.headerRow}>
        <TextField
          onChange={e => filteringTeble(e.target.value)}
          className={styles.search}
          size="small"
          inputProps={{
            placeholder: "Search"
          }}
        />

        <div className={styles.toolbar}>
          <Button
            className={styles.toggleButton}
            variant={multiSelectEnabled ? 'contained' : 'outlined'}
            color={multiSelectEnabled ? 'primary' : 'inherit'}
            size="small"
            onClick={toggleMultiSelect}
          >
            {multiSelectEnabled ? 'Disable Multi-select' : 'Enable Multi-select'}
          </Button>

          {
            multiSelectEnabled &&
            <>
              <span className={styles.selectedCount}>
                {selectedRows.length} selected
              </span>

              <Button
                className={styles.deleteButton}
                variant="outlined"
                color="secondary"
                size="small"
                disabled={!multiSelectEnabled || selectedRows.length === 0}
                onClick={deleteSelected}
              >
                Delete Selected
              </Button>
            </>
          }

        </div>
      </div>

      <div className={styles.tableWrapper}>
        <DataTable
          columns={columns}
          data={tableData}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          selectableRows={multiSelectEnabled}
          selectableRowsHighlight={multiSelectEnabled}
          onSelectedRowsChange={handleChange}
          clearSelectedRows={clearSelected}
        />
      </div>
    </div>
  )
}

export default Table
