import { IEntity } from "../IEntity";
import { IGridColumn } from "./IGridColumn";

export interface IGridRow {
    entity: IEntity;
    columns: IGridColumn[];
}