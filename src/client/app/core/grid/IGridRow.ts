import { IEntity } from "../IEntity";

export interface IGridRow {
    entity: IEntity;
    columns: IGridRowValues[];
}

export interface IGridRowValues{
    type?: any;
    value: any;
}