import React from 'react'
import Table from '@/app/components/table/Table'
import PageHeading from '@app/components/atomic/PageHeading'



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

function List() {
  return (
    <div className='container'>
      <PageHeading 
        title="Products" 
        subtitle="Manage your products" 
      />
      <Table data={data} columns={columns} />
    </div>
  )
}

export default List
