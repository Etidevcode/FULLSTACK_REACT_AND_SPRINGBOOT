/*
 * Copyright (c) - All Rights Reserved.
 * 
 * See the LICENSE file for more information.
 */

import { Carousel } from "./components/Carousel";
import { ExploreTopBooks } from "./components/ExploreTopBooks";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraryServices";

export const HomePage = () => {

    return (

        <>
            <ExploreTopBooks />
            <Carousel />
            <Heros />
            <LibraryServices />
        </>
    );
}