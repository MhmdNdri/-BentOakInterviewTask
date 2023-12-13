import React from 'react'
import { useQuery } from 'react-query'
import { useTable } from 'react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from '@mui/material'
import { getAllProducts, searchProducts } from '@/api'

interface Product {
  id: number
  title: string
  price: number
}

interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

const Products: React.FC = () => {
  const { data, isLoading } = useQuery<ProductsResponse, Error>('products', getAllProducts)

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Title', accessor: 'title' },
      { Header: 'Price', accessor: 'price' },
    ],
    [],
  )

  const [searchQuery, setSearchQuery] = React.useState('')
  const [searchResults, setSearchResults] = React.useState<Product[]>([])

  const handleSearchQueryChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    setSearchQuery(query)

    try {
      const response = await searchProducts(query)
      setSearchResults(response.products || [])
    } catch (error) {
      // Handle error
      console.error(`Error searching products for query "${query}":`, error)
      setSearchResults([])
    }
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: searchQuery ? searchResults : data?.products || [],
  })

  return (
    <div style={{ maxHeight: '55%', overflow: 'scroll', minWidth: '400px', minHeight: '400px' }}>
      <TextField
        label="Search"
        variant="outlined"
        margin="normal"
        fullWidth
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
      <TableContainer component={Paper}>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map(headerGroup => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                  ))}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {isLoading && <p>Loading...</p>}
    </div>
  )
}

export default Products
