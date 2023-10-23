import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { FigureNames, Fugure } from "./Figure";
// @ts-ignore  
import blackLogo from '../../assets/black-king.png'
// @ts-ignore  
import whiteLogo from '../../assets/white-king.png'


export class King extends Fugure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureNames.KING
	}
	canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false
		return true
	}
}