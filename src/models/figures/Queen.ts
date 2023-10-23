import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { FigureNames, Fugure } from "./Figure";
// @ts-ignore  
import blackLogo from '../../assets/black-queen.png'
// @ts-ignore  
import whiteLogo from '../../assets/white-queen.png'


export class Queen extends Fugure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureNames.QUEEN
	}
	canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false
		if (this.cell.isEmptyVertical(target)) return true
		if (this.cell.isEmptyHorizontal(target)) return true
		if (this.cell.isEmptyDiagonal(target)) return true
		return false

	}




}