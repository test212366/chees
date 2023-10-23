import React, { FC, useEffect, useState } from "react"
import { Board } from "../models/Board"
import { Cell } from "../models/Cell"
import { Player } from "../models/Player"
import CellComponent from "./CellComponent"

interface BoardProps {
	board: Board
	currentPlayer: Player | null
	swapPlayer: () => void
	setBoard: (board: Board) => void
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {
	const [selectedCell, setSelectedSell] = useState<Cell | null>(null)


	function click(cell: Cell) {
		if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
			selectedCell.moveFigure(cell)
			swapPlayer()
			setSelectedSell(null)
		} else {
			if (cell.figure?.color === currentPlayer?.color) setSelectedSell(cell)

		}


	}
	useEffect(() => {

		highLightCells()
	}, [selectedCell])

	function highLightCells() {
		board.highLightCells(selectedCell)
		updateBoard()
	}



	function updateBoard() {
		const newBoard = board.getCopyBoard()
		setBoard(newBoard)
	}

	return (
		<>
			<div>Текущ игрок {currentPlayer?.color}</div>
			<div className="board">
				{board.cells.map((row, ind) =>
					<React.Fragment key={ind}>
						{row.map(cell =>

							<CellComponent click={click} cell={cell} selected={
								cell.x === selectedCell?.x && cell.y === selectedCell?.y
							} key={cell.id} />


						)}
					</React.Fragment>
				)}
			</div>
		</>

	)
}

export default BoardComponent
