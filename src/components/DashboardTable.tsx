import { Column } from "react-table"
import TabelHOC from "./TabelHOC"


interface DataType {
    id: string,
    quantity: number,
    discount: number,
    amount: number,
    status: string
}

const columns: Column<DataType>[] = [
    {
        Header: "Id",
        accessor: "id",
    },
    {
        Header: "Quantity",
        accessor: "quantity",
    },
    {
        Header: "Discount",
        accessor: "discount",
    },
    {
        Header: "Amount",
        accessor: "amount",
    },
    {
        Header: "Status",
        accessor: "status",
    }
]


const DashboardTable = ({data = []}: {data: DataType[]}) => {

  return (
   TabelHOC<DataType>(columns, data, 'transactionBox', 'Top Transaction')()
  )
}

export default DashboardTable
