import { FigureNames, Fugure } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";

// @ts-ignore  
import blackLogo from '../../assets/black-rook.png'
// @ts-ignore  
import whiteLogo from '../../assets/white-rook.png'


export class Rook extends Fugure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureNames.ROOK
	}
	canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false
		if (this.cell.isEmptyVertical(target)) return true
		if (this.cell.isEmptyHorizontal(target)) return true
		return false
	}
}