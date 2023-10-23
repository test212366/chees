import { FC } from "react"
import { Cell } from "../models/Cell"

interface CellProps {
	cell: Cell
	selected: boolean
	click: (cell: Cell) => void
}

const CellComponent: FC<CellProps> = ({ cell, click, selected }) => {
	return (
		<div style={{ background: cell.available && cell.figure ? 'green' : '' }} className={['cell', cell.color, selected ? 'selected' : ''].join(' ')} onClick={() => click(cell)}>

			{cell.available && !cell.figure && <div className="available"></div>}
			{cell.figure?.logo && <img src={cell.figure.logo} />}
		</div>
	)
}

export default CellComponent
