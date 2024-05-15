/*
 * Copyright (c) - All Rights Reserved.
 * 
 * See the LICENSE file for more information.
 */


class AdminMessageRequest {

    id: number;
    response: string;

    constructor (id: number, response: string) {
        this.id = id;
        this.response = response;
    }
}

export default AdminMessageRequest;