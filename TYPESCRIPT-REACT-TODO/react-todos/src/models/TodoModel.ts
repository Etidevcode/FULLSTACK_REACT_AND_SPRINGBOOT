/*
 * Copyright (c) - All Rights Reserved.
 * 
 * See the LICENSE file for more information.
 */

class TodoModel {

    rowNumber: number;
    rowDescription: string;
    rowAssigned: string;

    constructor(rowNumber: number, rowDescription: string, rowAssigned: string){
        this.rowNumber = rowNumber;
        this.rowDescription = rowDescription;
        this.rowAssigned = rowAssigned;
    }
}